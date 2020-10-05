import { Route } from '@angular/compiler/src/core';
import { Component, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {

  @Input() item;
  constructor(private router:Router) {
    console.log(this.item)
   }

  verArtista(item: any){
    let artista_id: any;
    console.log(item);
    if (item.type == "artist"){
      artista_id = item.id;
    }else{
      artista_id = item.artists[0].id;
    }
    this.router.navigate([ '/artist', artista_id])
  }

}

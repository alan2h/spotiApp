import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// services
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artista_id : any;
  constructor( private router: ActivatedRoute, private postify: SpotifyService) {
    this.router.params.subscribe(params => {
      this.artista_id = params.id;
    })
   }

  ngOnInit(): void {
    console.log(this.artista_id);
    this.postify.getArtist(this.artista_id)
      .subscribe(data => {
        console.log(data);
      })
  }

}

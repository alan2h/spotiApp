import { Component, OnInit } from '@angular/core';

import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  canciones:any = [];

  constructor(private spotify: SpotifyService) {

  }

  ngOnInit(): void {
    this.spotify.getNewReleases()
      .subscribe(data => {
        this.canciones = data
      }) ;
  }

  buscarCancion(txtbuscador:any){
    console.log(txtbuscador);
    this.spotify.searchRelease(txtbuscador)
    .subscribe(data => {
      if (data){
        this.canciones = data;
       }
    })
  }

}

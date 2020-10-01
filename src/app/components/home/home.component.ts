import { Component, OnInit } from '@angular/core';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  albums:any = [];
 
  constructor(private spotify: SpotifyService) {
     this.spotify.getNewReleases()
     .subscribe(data => {
       this.albums = data.albums.items;
       console.log(data);
       console.log(this.albums);
     })
  }

  ngOnInit(): void {

  }

}

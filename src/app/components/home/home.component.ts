import { Component, OnInit } from '@angular/core';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  albums:any = [];

  loading: boolean;
 
  constructor(private spotify: SpotifyService) {
    this.loading = true;
     this.spotify.getNewReleases()
     .subscribe(data => {
       if (data){
        this.albums = data;
        console.log(this.albums);
        this.loading = false;
       }
     })
  }

  ngOnInit(): void {

  }

}

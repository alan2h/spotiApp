import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('service listo para usar');
  }

  getQuery(query){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC6kR1uf1pXCBJBbKw2HOdb97rFpfnjcFuUlQmO8jA8GCqU9mdcxOBWmd8TkjZEVj4gypQONYXmy7C85a5aNXVj-R0vklzUOkqBS_ncwwNHKeg6ZOF-fVaaNAke4Dbx-e3wlA'
    });

    return this.http.get(url, {headers})

  }

  getNewReleases(){
    
    return this.getQuery('browse/new-releases')
      .pipe(map(data => {
        return data['albums'].items;
      }));
  
  }

  searchRelease(artist:string){

    return this.getQuery(`search?q=${artist}&type=artist`)
      .pipe(map(data => {
          return data['artists'].items;
      }))
  }

}

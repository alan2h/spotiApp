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
      'Authorization': 'Bearer BQBzxU24OcqUSfjt5vcygewBZgFkt6HUcZsQD_Zr-TlTSUU82RgiR9NdnF8hBzz8B57sVf5qnSMkE1B6rSi9vvgCt33QMPpplKVNzirQ_Bchx7iRFANb3Ep-3en7yAM16boHqg'
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

  getArtist(id){
    return this.getQuery(`artists/${id}`)
  }

}

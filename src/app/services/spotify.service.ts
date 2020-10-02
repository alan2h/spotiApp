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
      'Authorization': 'Bearer BQCreX2OugOVNrsqH52onyLIG9G3CedeH-peSSs_x0V2CCFx4ff6ZMGHJIV6j0yiXQefefRnEhxEDTw5vOM'
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

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

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCreX2OugOVNrsqH52onyLIG9G3CedeH-peSSs_x0V2CCFx4ff6ZMGHJIV6j0yiXQefefRnEhxEDTw5vOM'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
      .pipe(map(data => {
        return data['albums'].items;
      }));
  
  }

  searchRelease(artist:string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCreX2OugOVNrsqH52onyLIG9G3CedeH-peSSs_x0V2CCFx4ff6ZMGHJIV6j0yiXQefefRnEhxEDTw5vOM'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${artist}&type=artist`, {headers})
      .pipe(map(data => {
          return data['artists'].items;
      }))
  }

}

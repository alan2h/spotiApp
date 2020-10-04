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
      'Authorization': 'Bearer BQCcHUCNNCGRGCo37LhvG3woXv56EjvgVy_e01HrKpTfuo6lm38pvqHuT3W3F0cLI0UuxMv_bKJS8oV7Lpw84yAsUT8pqfc0OXQKmm2hy2PMndmq74nKz0PoDHZ5LsCXGDjyGw'
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

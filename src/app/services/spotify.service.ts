import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('service listo para usar');
  }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCxvtXHyCiKUY0sE6RxFLL71TDVGlnHV7kpscS2sg3ZAN6xiC0xjsObQMgetz7H_m2J803CW0BWduer_zc'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
  
  }
}

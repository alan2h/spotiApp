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
      'Authorization': 'Bearer BQCGKB3MvkZke9Be4Brksr1edebLwVXBWa0tz13XBuAsL8cT3DMBWaE-3wA9g-eRKnUlk0ohSaDBuMQ0gY4'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
  
  }

  searchRelease(artist:string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCGKB3MvkZke9Be4Brksr1edebLwVXBWa0tz13XBuAsL8cT3DMBWaE-3wA9g-eRKnUlk0ohSaDBuMQ0gY4'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${artist}&type=artist`, {headers})
  }

}

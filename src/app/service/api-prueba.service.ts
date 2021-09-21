import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ApiPruebaService {

  constructor(private http: HttpClient) {

  }

  getCharacter() {
    return this.http.get('https://rickandmortyapi.com/api/character');
  }

  getLocation() {
    return this.http.get('https://rickandmortyapi.com/api/location');

  }

  getEpisodes() {
    return this.http.get('https://rickandmortyapi.com/api/episode');
  }

  getLocationId(url: any) {
    return this.http.get(url);
  }





}

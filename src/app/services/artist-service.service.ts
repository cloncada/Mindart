import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ArtistServiceService {

  constructor(private http: HttpClient) { }

  addArtist (Url: string, artista: any){

       return this.http.post(Url, artista);

  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AdminServicesService {

  constructor(private http: HttpClient) { }

  loginAdmin (Url: string, logartista: any){

    return this.http.post(Url, logartista);
  }
}


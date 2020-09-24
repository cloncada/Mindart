import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompaniesServicesService {

  constructor(private http: HttpClient) { }

  addCompany (Url: string, compania: any){

       return this.http.post(Url,compania );

  }
}

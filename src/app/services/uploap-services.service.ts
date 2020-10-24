import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UploapServicesService {

  
  constructor(private https: HttpClient) { }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const data: FormData = new FormData();
    
    console.log(data)
    data.append('file', file);

    const newRequest = new HttpRequest('POST', 'http://localhost:8080/uploadFile', data, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.https.request(newRequest);
  }
}

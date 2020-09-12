import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from './user';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  userModel= new User('','','',null,'','');
  
  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
  }
  getErrorMessage() {
    return this.email.hasError('email') ? 'No es un email valido' : '';
  }
  hide = true;

  onSubmit(){
    console.log(this.userModel)
    let json=JSON.stringify(this.userModel);
    let headers= new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("http:/localhost:8080/addArtist", json, {headers: headers});
  }
}   

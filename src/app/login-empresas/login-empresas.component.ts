import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup  } from '@angular/forms';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';


@Component({
  selector: 'app-login-empresas',
  templateUrl: './login-empresas.component.html',
  styleUrls: ['./login-empresas.component.css']
})
export class LoginEmpresasComponent implements OnInit {


  datosLogin = new FormGroup({
    email:new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required])
  });
  hide = true;

  constructor() {
  }
  ngOnInit(): void {
  }
  /*onSubmitLogin(){
     
    
    this.service.addArtist("http://localhost:8080/login/artist", this.datosLogin.value).subscribe(data=>{
    alert("Funciona chingada madre");
}*/
 
}

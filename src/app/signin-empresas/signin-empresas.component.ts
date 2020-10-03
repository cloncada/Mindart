import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import {CompaniesServicesService} from '../services/companies-services.service';



@Component({
  selector: 'app-signin-empresas',
  templateUrl: './signin-empresas.component.html',
  styleUrls: ['./signin-empresas.component.css']
})
export class SigninEmpresasComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private service: CompaniesServicesService) {
  }
  ngOnInit(): void {
  }


  datosCompanies = new FormGroup({
    name: new FormControl('',[Validators.required]),
    nit: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    number:new FormControl('', [Validators.required]),
    password:new FormControl('', [Validators.required])
  });

  hide = true;



  onSubmit(){

    console.log(this.datosCompanies.value);
    this.service.addCompany("http://localhost:8080/addCompany", this.datosCompanies.value).subscribe(data=>{
      alert("Usuario creado con exito...!");
    });


}
}

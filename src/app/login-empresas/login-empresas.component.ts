import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup  } from '@angular/forms';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import {CompaniesServicesService} from '../services/companies-services.service';
import { Location, } from '@angular/common';=======
import { Location } from '@angular/common';



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
  company:any;



  constructor(private service: CompaniesServicesService,
    private location: Location) {

  }

  ngOnInit(): void {
  }

  onSubmitLogin(){
    this.service.loginCompany("http://localhost:8080/login/company", this.datosLogin.value).subscribe(data=>{

    this.location.go("/perfil-artistas"),
    window.location.reload();

      this.location.go("/inicio-empresas"),

        window.location.reload();

  }); 

      this.company=data;
      let value = "1";
      localStorage.setItem("vista", value);
      window.location.reload();
      localStorage.setItem("idCompany", this.company.id);
      localStorage.setItem("emailCompany", this.company.email);
    
      
  }, (error) => {
    alert("Usuario y contraseña no coinciden");
    
  });

}
 
}

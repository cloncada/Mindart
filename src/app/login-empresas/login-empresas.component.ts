import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup  } from '@angular/forms';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import {CompaniesServicesService} from '../services/companies-services.service';
import { Location, } from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';


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
    private location: Location, private firestore: AngularFirestore,private router: Router) {

  }

  ngOnInit(): void {
  }

  onSubmitLogin(){
    this.firestore.collection("empresas", ref => ref.where("email", "==", this.datosLogin.value.email)).valueChanges().subscribe(posts => {
      this.company = posts as string[];
      this.company = this.company[0];
      if (this.company === undefined) {
        alert("usaurio  erroneo")
      } else { 
        if(this.company.password!=this.datosLogin.value.password){

          alert("usaurio o contraseña erroneos")
        }
        else{
          localStorage.setItem("empresa",JSON.stringify(this.company));
          this.router.navigate(["inicio-empresas"]);
        }
        
      
      }


    });
    

  }
 
}

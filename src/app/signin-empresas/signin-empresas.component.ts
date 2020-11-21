import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import {CompaniesServicesService} from '../services/companies-services.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoginArtistasService } from '../services/login-artistas.service';


@Component({
  selector: 'app-signin-empresas',
  templateUrl: './signin-empresas.component.html',
  styleUrls: ['./signin-empresas.component.css'],
  providers: [LoginArtistasService]
})
export class SigninEmpresasComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private service: CompaniesServicesService,private firestore: AngularFirestore, private authSvc: LoginArtistasService) {
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
    this.authSvc.register(this.datosCompanies.value.email,this.datosCompanies.value.password);
    return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection("empresas")
          .add(this.datosCompanies.value)
          .then(res => {}, err => reject(err));
         alert("empresa registrada con exito")
          
  });
    

  /*  console.log(this.datosCompanies.value);
    this.service.addCompany("http://localhost:8080/addCompany", this.datosCompanies.value).subscribe(data=>{
      alert("Usuario creado con exito...!");
    });
*/

}
}

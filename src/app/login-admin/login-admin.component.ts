import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from '../app.component';
import {AdminServicesService} from '../services/admin-services.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  datosLogin = new FormGroup({
    email:new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required])
  });
  hide = true;
  admin: any;
  
  constructor(private service: AdminServicesService,
    private location: Location) {
  }

  ngOnInit(): void {
    
  }
  onSubmitLogin(){
     
    console.log(this.datosLogin.value);
    this.service.loginAdmin("http://localhost:8080/login/admin", this.datosLogin.value).subscribe(data=>{
      this.location.go("/inicio-admin"),
      window.location.reload();
      this.admin=data;
    }, (error) => {
      alert("Usuario y contraseña no coinciden");
    
  });
}

  
 

}

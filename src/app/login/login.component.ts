import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import {ArtistServiceService} from '../services/artist-service.service';
import { MatDialog } from '@angular/material/dialog';
import{PerfilArtistasComponent} from '../perfil-artistas/perfil-artistas.component';
  import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  datosLogin = new FormGroup({
    email:new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required])
  });
  hide = true;

  constructor(private service: ArtistServiceService, public dialog: MatDialog) {
  }
  ngOnInit(): void {
  }

  onSubmitLogin(){
     
    
      this.service.addArtist("http://localhost:8080/login/artist", this.datosLogin.value).subscribe(data=>{
        //this.dialog.open(PerfilArtistasComponent);
        alert("funciona");
    }); 
  }
  

}

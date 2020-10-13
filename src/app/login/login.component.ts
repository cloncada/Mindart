import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import {ArtistServiceService} from '../services/artist-service.service';
import { Location } from '@angular/common';

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
  artista:any;
 

  constructor(private service: ArtistServiceService,
    private location: Location
    ) {
  }
  
  ngOnInit(): void {
  }
 

  onSubmitLogin(){

      this.service.addArtist("http://localhost:8080/login/artist", this.datosLogin.value).subscribe(data=>{
        this.location.go("/perfil-artistas"),
        window.location.reload();


      this.service.addArtist("http://localhost:8080/login/artist", this.datosLogin.value).subscribe(data=>{    
       this.artista=data,
       this.location.go("/perfil-artistas"),
       window.location.reload(),
       console.log(this.artista.id),
       localStorage.setItem("idArtista", this.artista.id);
       localStorage.setItem("emailArtista", this.artista.email);
      
      
  }, (error) => {
      alert("Usuario y contraseña no coinciden");
    
  });
  
});
}
}

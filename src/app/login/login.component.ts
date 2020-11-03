import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { ArtistServiceService } from '../services/artist-service.service';
import { Location } from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  datosLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  hide = true;
  artista: any;


  constructor(private service: ArtistServiceService,
    private location: Location, private firestore: AngularFirestore,private router: Router
  ) {
  }

  ngOnInit(): void {


  }


  onSubmitLogin() {

    this.firestore.collection("artistas", ref => ref.where("email", "==", this.datosLogin.value.email)).valueChanges().subscribe(posts => {
      this.artista = posts as string[];
      this.artista = this.artista[0];
      if (this.artista === undefined) {
        alert("usaurio  erroneo")
      } else { 
        if(this.artista.password!=this.datosLogin.value.password){

          alert("usaurio o contraseña erroneos")
        }
        else{
          localStorage.setItem("artista",JSON.stringify(this.artista));
          this.router.navigate(["inicio-artistas"]);
        }
        
      
      }


    });
    
  }
}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { ArtistServiceService } from '../services/artist-service.service';
import { Location } from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoginArtistasService } from '../services/login-artistas.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginArtistasService]
})
export class LoginComponent implements OnInit {

  datosLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  hide = true;
  artista: any;


  constructor(private service: ArtistServiceService,
    private location: Location, private firestore: AngularFirestore, private router: Router, private authSvc: LoginArtistasService
  ) {
  }

  ngOnInit(): void {


  }


  async onSubmitLogin() {
    try {
      const user = await this.authSvc.login(this.datosLogin.value.email, this.datosLogin.value.password);
      if (user) {
        this.router.navigate(['/inicio-artistas']);
        this.firestore.collection("artistas", ref => ref.where("email", "==", this.datosLogin.value.email)).valueChanges().subscribe(posts => {
          this.artista = posts as string[];
          this.artista = this.artista[0];
          localStorage.setItem("artista", JSON.stringify(this.artista));

        }

        );

      }
      else { alert("usuario o contraseña incorrectos") }
    } catch (error) { console.log(error); }




  }
}

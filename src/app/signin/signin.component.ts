import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ArtistServiceService } from '../services/artist-service.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoginArtistasService } from '../services/login-artistas.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [LoginArtistasService]
})
export class SigninComponent implements OnInit {

  datos = new FormGroup({
    name: new FormControl('', [Validators.required]),
    number: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  submitted = false;
  hide = true;
  corazao = "<3";
  constructor(private service: ArtistServiceService, private firestore: AngularFirestore, private authSvc: LoginArtistasService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.authSvc.register(this.datos.value.email,this.datos.value.password);
   return  new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("artistas")
        .add(this.datos.value)
        .then(res => { }, err => reject(err));
      this.submitted = true;      
    });
    return;
    // this.datos.value.email, this
    /*console.log(this.datos.value);
    this.service.addArtist("http://localhost:8080/addArtist", this.datos.value).subscribe(data=>{
      alert("Usuario creado con exito...!");
    }); 
    this.submitted=true;*/
  }


}   

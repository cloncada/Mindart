import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ArtistServiceService} from '../services/artist-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  datos = new FormGroup({
    name: new FormControl('',[Validators.required]),
    number: new FormControl('',[Validators.required]),
    dob: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    email:new FormControl('', [Validators.required, Validators.email])
  });
  submitted= false;
  hide = true;
  corazao="<3";
  constructor(private service: ArtistServiceService) {
  }

  ngOnInit(){  
  }
  

  onSubmit(){
     
     /* console.log(this.datos.value);
      this.service.addArtist("http://localhost:8080/addArtist", this.datos.value).subscribe(data=>{
        alert("Usuario creado con exito...!");
      });*/ 
      this.submitted=true;
  }

  
      

}   

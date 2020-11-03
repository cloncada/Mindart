import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-editar-artista',
  templateUrl: './editar-artista.component.html',
  styleUrls: ['./editar-artista.component.css']
})
export class EditarArtistaComponent implements OnInit {
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
  constructor() { }
 artista:any;
  ngOnInit(): void {

    this.artista=localStorage.getItem("artista");
    this.artista=JSON.parse(this.artista);

  }
  onSubmit(){


    console.log(this.datos.value);
  }

}

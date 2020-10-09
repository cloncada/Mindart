import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-subir-archivo',
  templateUrl: './subir-archivo.component.html',
  styleUrls: ['./subir-archivo.component.css']
})
export class SubirArchivoComponent implements OnInit {
/*private image:any;*/
  datosarchivo = new FormGroup({
    titulo:new FormControl('', [Validators.required]),
    DescripcionPost: new FormControl('',[Validators.required]),
    imagePost: new FormControl('',[Validators.required]),
    idPost: new FormControl('',[Validators.required]),
  });
  hide=true;

  constructor() { }

  ngOnInit(): void {
  }

  /*url="";*/
  handleImage(e){
    /*this.image = event.target.file[0];*/
    console.log('Image', e.target.files[0]);
    /*if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
      }
    }*/
  }

  onSubmit(){
    console.log(this.datosarchivo.value);
    
  }

}

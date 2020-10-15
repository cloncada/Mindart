import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-proyecto',
  templateUrl: './form-proyecto.component.html',
  styleUrls: ['./form-proyecto.component.css']
})
export class FormProyectoComponent implements OnInit {
  proyectoForm: FormGroup
  constructor(private _builder: FormBuilder) { 
    this.proyectoForm =  this._builder.group({
      Nombre_Proyecto:['',Validators.compose([Validators.maxLength(100),Validators.required])],
      Descripcion_Proyecto:['',Validators.required],
      //Doblaje:[false,Validators.requiredTrue],
      //Locutor:[false,Validators.requiredTrue],
      //Dibujante:[false,Validators.requiredTrue]
    })
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';


@Component({
  selector: 'app-signin-empresas',
  templateUrl: './signin-empresas.component.html',
  styleUrls: ['./signin-empresas.component.css']
})
export class SigninEmpresasComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  constructor() {
  }
  ngOnInit(): void {
  }
  
  hide = true;
}

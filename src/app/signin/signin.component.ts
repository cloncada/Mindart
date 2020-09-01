import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  constructor() {
  }
  ngOnInit(): void {
  }
  getErrorMessage() {
    return this.email.hasError('email') ? 'No es un email valido' : '';
  }
  hide = true;
}

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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

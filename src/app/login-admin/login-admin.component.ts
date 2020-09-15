import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  
  constructor() { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    return this.email.hasError('email') ? 'No es un email valido' : '';
  }
  hide = true;

}

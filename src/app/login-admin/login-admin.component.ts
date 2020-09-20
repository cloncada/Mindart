import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  
  constructor(private app:AppComponent) { }

  ngOnInit(): void {
    this.app.FalseToolBar();
  }

  getErrorMessage() {
    return this.email.hasError('email') ? 'No es un email valido' : '';
  }
  hide = true;

}

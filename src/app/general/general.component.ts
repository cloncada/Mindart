import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { SigninComponent } from '../signin/signin.component';
import { LoginEmpresasComponent } from '../login-empresas/login-empresas.component';
import { SigninEmpresasComponent } from '../signin-empresas/signin-empresas.component';
import { InfoComponent } from '../info/info.component';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  show: boolean = true;
  home: boolean = false;

  openDialog() {
    this.dialog.open(LoginComponent);
  }

  openInfo(){
    this.dialog.open(InfoComponent);
  }

  openDialogempresas(){
    this.dialog.open(LoginEmpresasComponent);
  }

  openDialogsignin() {
    this.dialog.open(SigninComponent);
  }

  openDialogsigninempresas(){
    this.dialog.open(SigninEmpresasComponent);
  }

  ngOnInit(): void {
  }

}

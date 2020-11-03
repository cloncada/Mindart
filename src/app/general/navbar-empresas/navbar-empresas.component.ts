import { Component, OnInit } from '@angular/core';
import { InfoComponent } from '../../info/info.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginEmpresasComponent } from 'src/app/login-empresas/login-empresas.component';
import { SigninEmpresasComponent } from 'src/app/signin-empresas/signin-empresas.component';
@Component({
  selector: 'app-navbar-empresas',
  templateUrl: './navbar-empresas.component.html',
  styleUrls: ['./navbar-empresas.component.css']
})
export class NavbarEmpresasComponent implements OnInit {

  constructor(public dialog: MatDialog,private router: Router) { }

  ngOnInit(): void {
  }
  openInfo(){
    this.dialog.open(InfoComponent);
  }
  openDialog() {
    this.dialog.open(SigninEmpresasComponent);
  }
  openDialogsignin() {
    this.dialog.open(LoginEmpresasComponent);
  }
  inicioArtistas(){

    this.router.navigate(["artistas"]);
  


  }
}

import { Component, OnInit } from '@angular/core';
import { InfoComponent } from '../../info/info.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../login/login.component';
import { SigninComponent } from '../../signin/signin.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public dialog: MatDialog,private router: Router) { }

  ngOnInit(): void {
  }
  openInfo(){
    this.dialog.open(InfoComponent);
  }
  openDialog() {
    this.dialog.open(LoginComponent);
  }
  openDialogsignin() {
    this.dialog.open(SigninComponent);
  }
  inicioEmpresas(){

    this.router.navigate(["empresas"]);
  


  }
}

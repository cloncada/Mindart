import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { SigninComponent } from '../signin/signin.component';

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

  openDialogsigin() {
    this.dialog.open(SigninComponent);
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ɵAnimationGroupPlayer } from '@angular/animations';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private app:AppComponent) { }

  ngOnInit(): void {
    this.app.TrueToolBar();
  }

}

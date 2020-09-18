import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-perfil-artistas',
  templateUrl: './perfil-artistas.component.html',
  styleUrls: ['./perfil-artistas.component.css']
})
export class PerfilArtistasComponent implements OnInit {

  constructor(private app:AppComponent) { }

  ngOnInit(): void {
    this.app.FalseToolBar();
  }

}

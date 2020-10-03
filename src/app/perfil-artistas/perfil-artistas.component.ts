import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { MatDialog } from '@angular/material/dialog';
import { NotificacionesComponent } from '../notificaciones/notificaciones.component';

@Component({
  selector: 'app-perfil-artistas',
  templateUrl: './perfil-artistas.component.html',
  styleUrls: ['./perfil-artistas.component.css']
})
export class PerfilArtistasComponent implements OnInit {
/*selectedFile= null;
  onfileSelected(event){
    this.selectedFile= event.target.files[0];
}
onUpload(){
}*/
  constructor(private app:AppComponent, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.app.FalseToolBar();
  }
  openInfo(){
    this.dialog.open(NotificacionesComponent);
  }
}

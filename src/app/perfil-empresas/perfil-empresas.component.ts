import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { MatDialog } from '@angular/material/dialog';
import { NotificacionesComponent } from '../notificaciones/notificaciones.component';
import { FormProyectoComponent } from '../form-proyecto/form-proyecto.component';



@Component({
  selector: 'app-perfil-empresas',
  templateUrl: './perfil-empresas.component.html',
  styleUrls: ['./perfil-empresas.component.css']
})
export class PerfilEmpresasComponent implements OnInit {
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
  openImagen(){
 
  }

  profileBusinessImg="./assets/Photos/Perfil-Empresa.jpg";

  NewProyecto(){
  this.dialog.open(FormProyectoComponent);
  }
  
}




import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { MatDialog } from '@angular/material/dialog';
import { NotificacionesComponent } from '../notificaciones/notificaciones.component';
import { InicioComponent } from '../inicio/inicio.component';
import { InicioArtistasComponent } from '../inicio-artistas/inicio-artistas.component';
import { GeneralComponent } from '../general/general.component';
import { InicioAdminComponent } from '../inicio-admin/inicio-admin.component';


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
  /*openArtistas(){
    this.dialog.open(ini);
  }*/
  url="./assets/blanco.jpg";
  onselectFile(e){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
      }
    }
  }
}

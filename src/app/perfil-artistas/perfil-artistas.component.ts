import { Component,  OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { NotificacionesComponent } from '../notificaciones/notificaciones.component';
import { SubirArchivoComponent } from '../subir-archivo/subir-archivo.component';



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
  idArtista= localStorage.getItem("idArtista");
  emailArtistas=localStorage.getItem("emailArtistas");
  
  constructor(private app:AppComponent, public dialog: MatDialog,
    
   ) { }

  ngOnInit(): void {
    this.app.FalseToolBar();
  }
  openInfo(){
    this.dialog.open(NotificacionesComponent);
  }
  openArchivo(){
    this.dialog.open(SubirArchivoComponent);
  }
 
  /*openArtistas(){
    this.dialog.open(ini);
  }*/
  url="";
  onselectFile(e){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
        console.log(this.url);
      }
    }
  }
}

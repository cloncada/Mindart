import { Component,  OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { NotificacionesComponent } from '../notificaciones/notificaciones.component';
import { SubirArchivoComponent } from '../subir-archivo/subir-archivo.component';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { UploapServicesService} from '../services/uploap-services.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

//import * as firebase from 'firebase';
//import { Observable } from 'rxjs';

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
  public name: string;
  public uploading= false;
  //public uploadPercent: Observable<number>;
  //public downloadURL: Observable<string>;
  
  constructor(private app:AppComponent, public dialog: MatDialog, private storage: AngularFireStorage
    
   ) { }

   uploadPercent: Observable<number>;
   urlImage: Observable<string>;

  ngOnInit(): void {
    this.app.FalseToolBar();
  }
  onUpload(e){
    //console.log('subir', e);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/profile_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(()=> this.urlImage = ref.getDownloadURL())).subscribe();    
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

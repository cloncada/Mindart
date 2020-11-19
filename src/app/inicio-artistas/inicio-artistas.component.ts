import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { PostempService } from '../services/postemp.service';
import { NotificacionService } from '../services/notificacion-service.service';

import { MatDialog} from '@angular/material/dialog';
import { PostempI } from '../shared/models/postemp.interface';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase'
import Swal from 'sweetalert2';

import { FormControl } from '@angular/forms';
import { CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY } from '@angular/cdk/overlay/overlay-directives';
import { subscribeOn } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-inicio-artistas',
  templateUrl: './inicio-artistas.component.html',
  styleUrls: ['./inicio-artistas.component.css']
})
export class InicioArtistasComponent implements OnInit {

 
  
  public postsemp$: Observable<PostempI[]>;
  private user:any;
 


  constructor(
    private app:AppComponent, 
    private postempSvc:PostempService,
    private postNotiSvc:NotificacionService,
    ) { }

  ngOnInit(): void {
    this.postsemp$ = this.postempSvc.getAllPostemp();
    
  }

  postulacion(postemp?){
    if(postemp){
      this.postempSvc.selected = postemp;
      console.log(this.postempSvc.selected.registra+" "+this.postempSvc.selected.titlePost)
      this.user = JSON.parse(localStorage.getItem('artista'));
      console.log(this.user.name+" "+this.user.email)
      
      let newPostulacionemp = {
        interesado: this.user.name,
        emailInter: this.user.email,
        creador: this.postempSvc.selected.registra,
        nombreProyecto: this.postempSvc.selected.titlePost,
        userType: "artista",
      }
      Swal.fire('Postulado exitosamente')
      this.postNotiSvc.addPostnoti(newPostulacionemp);
     
    }
  }
  

}

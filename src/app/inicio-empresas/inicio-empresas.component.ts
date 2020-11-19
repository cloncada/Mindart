import { Component, OnInit } from '@angular/core';
import { PostartistaI} from '../postartista/postartista.interface';
import { Observable } from 'rxjs';
import { PostartistaService} from '../services/postartista.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { NotificacionService } from '../services/notificacion-service.service';
import { EmpresasComponent } from '../empresas/empresas.component';

@Component({
  selector: 'app-inicio-empresas',
  templateUrl: './inicio-empresas.component.html',
  styleUrls: ['./inicio-empresas.component.css']
})
export class InicioEmpresasComponent implements OnInit {

  public postartista$: Observable<PostartistaI[]>;
  private user:any;
 


  constructor(public postSvc:PostartistaService,
    private firestore: AngularFirestore,
    private postNotiSvc:NotificacionService,
    ) { }

  ngOnInit(): void {
    this.postartista$= this.postSvc.getAllPosts();

  }
  
  postulacion(postartista?){
    if(postartista){
      this.postSvc.selected = postartista;
      console.log(this.postSvc.selected.registra+" "+this.postSvc.selected.titlePost)
      this.user = JSON.parse(localStorage.getItem('empresa'));
      console.log(this.user.name+" "+this.user.email)
      
     let newPostulacionemp = {
        interesado: this.user.name,
        emailInter: this.user.email,
        creador: this.postSvc.selected.registra,
        nombreProyecto: this.postSvc.selected.titlePost,
        userType: "empresa",
      }
      Swal.fire('Postulado exitosamente')
      this.postNotiSvc.addPostnoti(newPostulacionemp);
    
    }
  }

}

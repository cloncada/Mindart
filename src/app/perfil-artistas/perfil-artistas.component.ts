import { Component,  Input,  OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NotificacionesComponent } from '../notificaciones/notificaciones.component';
import { SubirArchivoComponent } from '../subir-archivo/subir-archivo.component';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { UploapServicesService} from '../services/uploap-services.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PostartistaService} from '../services/postartista.service';
import { PostartistaI} from '../postartista/postartista.interface';
import { ModalComponent} from '../postartista/modal/modal.component';
import { NewPostartistaComponent } from '../postartista/new-postartista/new-postartista.component';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostartistaComponent } from '../postartista/postartista/postartista.component';
import { PostartistaID} from '../services/postartista.service';
import { PostNotificacionComponent } from '../post-notificacion/post-notificacion.component';

@Component({
  selector: 'app-perfil-artistas',
  templateUrl: './perfil-artistas.component.html',
  styleUrls: ['./perfil-artistas.component.css']
})
export class PerfilArtistasComponent implements OnInit {

  nombre: string='';
  private image: any;
  private imageOriginal: any;
  @Input() post: PostartistaI;

  public uploadPercent: Observable<number>;
  public downloadURL: Observable<string>;
  public postartista$: Observable<PostartistaI[]>;
  
  constructor(
    public postSvc:PostartistaService,
    private app:AppComponent, 
    public dialog: MatDialog, 
    private storage: AngularFireStorage
    
   ) { }

   public editPostForm= new FormGroup({
     id: new FormControl('',Validators.required),
     nombrePost: new FormControl('',Validators.required),
     titlePost: new FormControl('',Validators.required),
     contentPost: new FormControl('',Validators.required),
     tagsPost: new FormControl('',Validators.required),
     imagePost: new FormControl('',Validators.required),
   });
   /*uploadPercent: Observable<number>;
   urlImage: Observable<string>;*/

  ngOnInit(): void {
/*     this.postartista$= this.postSvc.getAllPosts();  */ 
    this.app.FalseToolBar();
    this.NombArtista();
    this.postSvc.nombreArtista=this.nombre;
    this.postartista$ = this.postSvc.getPostartByName();
  }

openModal(): void{
  this.resetForm();
const dialogConfig= new MatDialogConfig();
dialogConfig.data={
  title: 'Modal'
};
dialogConfig.autoFocus= true;
this.dialog.open(NewPostartistaComponent, dialogConfig);
}

resetForm(): void{
  this.postSvc.selected.titlePost='';
  this.postSvc.selected.contentPost='';
  this.postSvc.selected.id=null;
  this.postSvc.selected.tagsPost='';
}
private initValuesForm(){
    this.editPostForm.patchValue({
      id: this.post.id,
      titlePost: this.post.titlePost,
      contentPost: this.post.contentPost,
      tagsPost: this.post.tagsPost,        
    });
  }
  

  onEditPost(postartista?){
    //this.resetForm();
    this.openModal();
    if(postartista){
      this.postSvc.selected= postartista;
    }
  }

  onDeletePost(post: PostartistaI){
    Swal.fire({
      title:'¿Seguro que desea eliminar este proyecto?',
      text:'Si elimina este proyecto no se podra revertir o recuperar despues de ser eliminado',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText:'Si, eliminar proyecto!'
    }).then(result =>{
      if(result.value){
        this.postSvc.deletePostById(post).then(()=>{
          //El usuario quiere eliminar el proyecto
        console.log('Delete');
        Swal.fire('Eliminado!','Se ha eliminado el proyecto satisfactoriamente', 'success');
        }).catch((error)=>{
          Swal.fire('Error!','Ocurrio un error en eliminar el proyecto', 'error');
        });
      }
    });
  }

  onNewPost(){
    //this.resetForm();
    this.openDialog();
  }


  

  openDialog(post?:PostartistaI): void{
    const config={
      data:{
        message: post ? 'Edit Post':'New Post',
        content: post
      }
    };
    const dialogRef = this.dialog.open(ModalComponent, config);
      dialogRef.afterClosed().subscribe(result =>{
      console.log(`Dialog result ${result}`);
    })
  }


  openInfo(){
    this.dialog.open(NotificacionesComponent);
  }

 NombArtista(){
   var demo=document.getElementById('nombreArt');
   var ver=demo.innerText;
   this.nombre=ver;
 }

 openModalNoti(): void{
  const dialogConfig = new MatDialogConfig();
  dialogConfig.data = {
    title: 'Modal'
  };
  dialogConfig.autoFocus = true;
  this.dialog.open(PostNotificacionComponent, dialogConfig);
}
}










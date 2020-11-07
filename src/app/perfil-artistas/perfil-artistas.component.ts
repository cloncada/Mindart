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

//import * as firebase from 'firebase';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-perfil-artistas',
  templateUrl: './perfil-artistas.component.html',
  styleUrls: ['./perfil-artistas.component.css']
})
export class PerfilArtistasComponent implements OnInit {


  /*idArtista= localStorage.getItem("idArtista");
  emailArtistas=localStorage.getItem("emailArtistas");
  public name: string;
  public uploading= false;*/
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
     titlePost: new FormControl('',Validators.required),
     contentPost: new FormControl('',Validators.required),
     imagePost: new FormControl('',Validators.required),
   });
   /*uploadPercent: Observable<number>;
   urlImage: Observable<string>;*/

  ngOnInit(): void {
    /*this.image= this.post.imagePost;
    this.imageOriginal= this.post.imagePost;
    this.initValuesForm();*/
    this.postartista$= this.postSvc.getAllPosts();
    this.app.FalseToolBar();
  }
/*editPost(postartista){
this.resetForm();
this.openModal();
if(postartista){
this.postSvc.selected=postartista;
}
}*/

openModal(): void{
const dialogConfig= new MatDialogConfig();
dialogConfig.data={
  title: 'Modal'
};
dialogConfig.autoFocus= true;
this.dialog.open(ModalComponent, dialogConfig);
}

resetForm(): void{
  this.postSvc.selected.titlePost='';
  this.postSvc.selected.contentPost='';
  this.postSvc.selected.id=null;
}
private initValuesForm(){
    this.editPostForm.patchValue({
      id: this.post.id,
      titlePost: this.post.titlePost,
      contentPost: this.post.contentPost,        
    });
  }
  

  onEditPost(postartista){
    this.resetForm();
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

  /*onUpload(e){
    //console.log('subir', e);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/profile_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(()=> this.urlImage = ref.getDownloadURL())).subscribe();    
  }*/


  openInfo(){
    this.dialog.open(NotificacionesComponent);
  }

  /*url="";
  onselectFile(e){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
        console.log(this.url);
      }
    }
  }*/
 
}









/*selectedFile= null;
  onfileSelected(event){
    this.selectedFile= event.target.files[0];
}
onUpload(){

}*/
/*public postartista: {
  id: string;
  titlePost: string;
  contentPost: string;
  imagePost: string;
}[]=[
  {
    id:'1',
    titlePost: 'Post one',
    contentPost: 'Aca podras implementar un nuevo proyecto para mostrar a las empresas',
    imagePost: 'https://cdn.cheapism.com/images/2020tuscon.max-800x600.jpg',
  },
  {
    id:'2',
    titlePost: 'Post Two',
    contentPost: 'Aca podras implementar un nuevo proyecto para mostrar a las empresas',
    imagePost: 'https://cdn.cheapism.com/images/2020tuscon.max-800x600.jpg',
  },
  {
    id:'3',
    titlePost: 'Post Two',
    contentPost: 'Aca podras implementar un nuevo proyecto para mostrar a las empresas',
    imagePost: 'https://cdn.cheapism.com/images/2020tuscon.max-800x600.jpg',
  },
  {
    id:'4',
    titlePost: 'Post Two',
    contentPost: 'Aca podras implementar un nuevo proyecto para mostrar a las empresas',
    imagePost: 'https://cdn.cheapism.com/images/2020tuscon.max-800x600.jpg',
  }
];*/

/*openArchivo(){
    this.dialog.open(SubirArchivoComponent);
  }*/
 
  /*openArtistas(){
    this.dialog.open(ini);
  }*/
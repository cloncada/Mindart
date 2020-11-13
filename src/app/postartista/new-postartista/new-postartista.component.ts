import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { PostartistaI} from '../../postartista/postartista.interface';
import { PostartistaService} from '../../services/postartista.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PostartistaComponent } from '../postartista/postartista.component';

@Component({
  selector: 'app-new-postartista',
  templateUrl: './new-postartista.component.html',
  styleUrls: ['./new-postartista.component.css']
})
export class NewPostartistaComponent implements OnInit {
private image:any;
newPostForm = new FormGroup({
  titlePost: new FormControl('', [Validators.required]),
  contentPost: new FormControl('', [Validators.required]),
  imagePost: new FormControl('', [Validators.required]),
  tagsPost: new FormControl('', [Validators.required]), 
 });
postartistaForm: FormGroup
  constructor(
    public postSvc: PostartistaService,
    private dialogRef: MatDialogRef<PostartistaComponent>,
    ) { }

  ngOnInit(): void{
  }

  addNewPost(data: PostartistaI){
    this.postSvc.preAddAndUpdatePost(data, this.image);
  }

  handleImage(event:any): void{
    this.image= event.target.files[0];
  }
  onSaveForm(){
    if(this.postSvc.selected.id==null){
      let newPostSvc={
        titlePost: this.postSvc.selected.titlePost,
        contentPost: this.postSvc.selected.contentPost,
        tagsPost: this.postSvc.selected.tagsPost,
        registra: this.postSvc.nombreArtista
      }
      Swal.fire('Proyecto publicado', 'Su proyecto se ha publicado con éxito', 'success' )
    }else{
      //Metodo de alerta y edicion de post
      Swal.fire('Proyecto editado', 'Su proyecto se ha editado con éxito', 'success')
      this.postSvc.editPostartista(this.postSvc.selected);
    }
    this.close();
  }
  //Clase para cerrar el popup
  close(): void{
    this.dialogRef.close();
  }
}

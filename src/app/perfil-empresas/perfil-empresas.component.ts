import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { PostempID, PostempService } from '../services/postemp.service';
import { PostempI } from '../shared/models/postemp.interface';
import { Observable, Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { PostEmpresasComponent } from '../post-empresas/post-empresas.component';
import { PostNotificacionComponent } from '../post-notificacion/post-notificacion.component';
import { NotificacionService } from '../services/notificacion-service.service';

@Component({
  selector: 'app-perfil-empresas',
  templateUrl: './perfil-empresas.component.html',
  styleUrls: ['./perfil-empresas.component.css']
})
export class PerfilEmpresasComponent implements OnInit {

  nombre: string ='';

  public postsemp$: Observable<PostempI[]>;

 

  profileBusinessImg="./assets/Photos/Perfil-Empresa.jpg";
  constructor(
    private app:AppComponent, 
    private postempSvc:PostempService,
    private dialog: MatDialog,
    private postNotiSvc:NotificacionService,) { }

  ngOnInit(): void {
    this.app.FalseToolBar();
    this.NombEmpresa();
    this.postempSvc.nombreEmpresa = this.nombre;
    this.postsemp$= this.postempSvc.getPostempByName();
    /*     this.postsemp$ = this.postempSvc.getAllPostemp();  OBTIENE TODOS LOS POST SIN FILTRADO DE EMPRESA*/
  }

  onEdit(postemp?){
    this.resetForm();
    this.openModal();
    if(postemp){
      this.postempSvc.selected = postemp;
    }
  }

  onDelete(postemp:PostempI){
    //Alert para borrar un post
    Swal.fire({
      title:'¿Seguro que desea eliminar este proyecto?',
      text:`Esta acción no se podrá revertir`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0288D1',
      confirmButtonText: 'Eliminar',
      cancelButtonColor: '#D32F2F',
      cancelButtonText: 'Cancelar'
    }).then(result=> {
      if(result.value){
        // Quiere borrar
        this.postempSvc.deletePostemp(postemp).then(()=>{
          Swal.fire('Proyecto eliminado','Su proyecto ha sido eliminado con éxito.', 'success')
        }).catch((error)=>{
          Swal.fire('Error','Se ha producido un error', 'error')
        });
      }
    });
  }

  openModal(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      title: 'Modal'
    };
    dialogConfig.autoFocus = true;
    this.dialog.open(PostEmpresasComponent, dialogConfig);
  }
  openModalNoti(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      title: 'Modal'
    };
    dialogConfig.autoFocus = true;
    this.dialog.open(PostNotificacionComponent, dialogConfig);
  }


  resetForm(): void{
    this.postempSvc.selected.titlePost='';
    this.postempSvc.selected.contentPost='';
    this.postempSvc.selected.tagsPost='';
    this.postempSvc.selected.id= null;
  }

  NombEmpresa(){
    var demo= document.getElementById('nombreemp');
    var ver= demo.innerText;
    this.nombre = ver;
  }

  showNoti(){
    this.openModalNoti();
  
  }
}
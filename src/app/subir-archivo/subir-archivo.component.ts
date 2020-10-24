import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { UploapServicesService} from '../services/uploap-services.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-subir-archivo',
  templateUrl: './subir-archivo.component.html',
  styleUrls: ['./subir-archivo.component.css']
})
export class SubirArchivoComponent implements OnInit {
/*private image:any;*/
rta:[];
  datosarchivo = new FormGroup({
    titulo:new FormControl('', [Validators.required]),
    DescripcionPost: new FormControl('',[Validators.required]),
    imagePost: new FormControl('',[Validators.required]),
    idPost: new FormControl('',[Validators.required]),
  });
  
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  selectedFile = null;
  changeImage = false;
  
  constructor(private uploadService: UploapServicesService, private http: HttpClient) { }

  ngOnInit(): void {
    //this.http.get('')
    //.subscribe(data =>{

    //});
  }
  onSubmit(){
    console.log(this.datosarchivo.value);
    
  }

  downloadFile(){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '_File_Saved_Path');
    link.setAttribute('download', 'file_name.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
  change($event) {
    this.changeImage = true;
  }

  changedImage(event) {
    this.selectedFile = event.target.files[0];
  }
  /*url="";*/
  /*handleImage(e){
    this.image = event.target.file[0];
    console.log('Image', e.target.files[0]);
    this.currentFileUpload = e.target.files.item(0);
    /*if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
      }
    }
  }*/
  upload() {
    //console.log("duvancho")
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item[0];
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        alert('File Successfully Uploaded');  
      }
    

    this.selectedFiles = undefined;
      }
    );
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

}

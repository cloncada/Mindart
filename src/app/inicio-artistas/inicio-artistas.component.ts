import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import {PostempService } from '../services/postemp.service';
import { MatDialog} from '@angular/material/dialog';
import { PostempI } from '../shared/models/postemp.interface';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase'
import { FormControl } from '@angular/forms';
import { CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY } from '@angular/cdk/overlay/overlay-directives';
import { subscribeOn } from 'rxjs/operators';


@Component({
  selector: 'app-inicio-artistas',
  templateUrl: './inicio-artistas.component.html',
  styleUrls: ['./inicio-artistas.component.css']
})
export class InicioArtistasComponent implements OnInit {

 
  
  public postsemp$: Observable<PostempI[]>;
  private db = firebase.firestore();
  public nombreEmp:string;
  public idEmp:string;
 


  constructor(
    private app:AppComponent, 
    private postempSvc:PostempService,
    private dialog: MatDialog,
    private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.app.FalseToolBar();
    this.postsemp$ = this.postempSvc.getAllPostemp();
  
  }

  Postulacion(){
    this.prueba();
    console.log(this.nombreEmp +this.idEmp);  
    /*console.log(""+this.firestore.collection("artistas").valueChanges()._subscribe(post => ));{
      const post = this.db.collection("postemp")
      const query = post.where("registra","==", ).get().then((querySnapschot)=>{
        querySnapschot.forEach(function(doc){
          console.log(doc.id,"=>", doc.data());
        })
      })
      console.log(query);
      //console.log("another try"+this.postempSvc.selected.id);*/
    } 
  
    prueba(demo = document.getElementById('registra'),demo1=document.getElementById('id')){
      
      var ver = demo.innerText;
      var ver1= demo1.innerText;
      this.nombreEmp=ver;
      this.idEmp=ver1;
    }
    
  

}

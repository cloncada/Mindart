import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import {PostempService } from '../services/postemp.service';
import { MatDialog} from '@angular/material/dialog';
import { PostempI } from '../shared/models/postemp.interface';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
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
    //console.log(""+this.firestore.collection("artistas").valueChanges()._subscribe(post => ));
  }

}

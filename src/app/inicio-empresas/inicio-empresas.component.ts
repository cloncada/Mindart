import { Component, OnInit } from '@angular/core';
import { PostartistaI} from '../postartista/postartista.interface';
import { Observable } from 'rxjs';
import { PostartistaService} from '../services/postartista.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-inicio-empresas',
  templateUrl: './inicio-empresas.component.html',
  styleUrls: ['./inicio-empresas.component.css']
})
export class InicioEmpresasComponent implements OnInit {

  public postartista$: Observable<PostartistaI[]>;
 


  constructor(public postSvc:PostartistaService,
    private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.postartista$= this.postSvc.getAllPosts();

  }
  
  Postulacion(){
    //this.firestore.collection("artistas", ref => ref.where("name", "==", this.postartista$.name)).valueChanges().subscribe(posts => {
  }

}

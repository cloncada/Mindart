import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PostempI } from '../shared/models/postemp.interface';


export interface PostempID extends PostempI{id: string;}

@Injectable({
  providedIn: 'root'
})
export class PostempService {
  nombreEmpresa: string = '';


  private postempCollection: AngularFirestoreCollection<PostempI>;
  postemp: Observable<PostempID[]>;
  public selected = {
    id: null,
    titlePost:'',
    contentPost: '',
    tagsPost: '',
    registra: ''
  };
  constructor(private readonly afs: AngularFirestore){
    this.postempCollection = afs.collection<PostempI>('postemp');
    this.postemp = this.postempCollection.snapshotChanges().pipe(
      map(actions => actions.map (a=>{
        const data = a.payload.doc.data()as PostempI;
        const id = a.payload.doc.id;
        return { id, ... data};
      }))
    );
  }

  getAllPostemp(){
    return this.postemp;
  }

  editPostemp(postemp:PostempID){
    return this.postempCollection.doc(postemp.id).update(postemp)
  }

  deletePostemp(postemp:PostempI){
    return this.postempCollection.doc(postemp.id).delete();
  }


  addPostemp(postemp:PostempI){
    return this.postempCollection.add(postemp);
  }
 
  //Obtiene un solo proyecto de Firebase por medio del id de post
  public getOnePost(id:PostempI):Observable<PostempI>{
    return this.afs.doc<PostempI>(`postemp/${id}`).valueChanges();
  }

}


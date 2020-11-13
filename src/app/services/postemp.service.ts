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
  private postempCollection: AngularFirestoreCollection<PostempI>;
  postemp: Observable<PostempID[]>;
  public selected = {
    id: null,
    titlePost:'',
    contentPost: '',
    tagsPost: '',
    registra:''
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



  /*   
 */
/*   constructor(private readonly afs: AngularFirestore) { 
    this.postempCollection = afs.collection<PostempI>('postemp');
    this.postemp = this.postempCollection.snapshotChanges().pipe(
      map(actions => actions.map(a=>{
        const data = a.payload.doc.data()as PostempI;
        const id = a.payload.doc.id;
        return { id,... data };
      }))
    );
  }

  addNewPostemp(postemp: PostempI){
    return this.postempCollection.add(postemp);
  }

  getAllPostsemp(){
    return this.postemp;
  }

  
  public editPostemp(postemp: PostempID){
    return this.postempCollection.doc(postemp.id).update(postemp);
  }


//Obtiene todos los proyectos de Firebase
/*   public getAllPostsemp():Observable<PostempI[]>{
    return this.postempCollection.snapshotChanges().pipe(
      map(actions => actions.map(a=>{
        const data = a.payload.doc.data()as PostempI;
        const id = a.payload.doc.id;
        return { id,... data };
      })
      )
    );
  } */


/* //Elimina un proyecto en firebase enviando el id obtenido
  public deletePostempById(postemp:PostempI){
    return this.postempCollection.doc(postemp.id).delete();
  }

} */
 ///Actualiza un proyecto en firebase correspondiente al id obtenido
/*   public editPostempById(postemp: PostempI){
    return this.postempCollection.doc(postemp.id).update(postemp.id);
  } */
//Registra un proyecto en firebase (los datos vienen desde form-proyecto.ts)
/*  public savePostemp(postemp: PostempI){
    const postempObj ={
      titlePost: postemp.titlePost,
      contentPost: postemp.contentPost,
      tagsPost: postemp.tagsPost
    };
    if (postemp.id) {
      return this.postempCollection.doc(postemp.id).update(postempObj);

    } else{
      return this.postempCollection.add(postempObj);
    }
  }
  */






}


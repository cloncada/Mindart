import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { PostnotiI } from '../shared/models/postnoti.interface';
import { map } from 'rxjs/operators';


export interface PostnotiID extends PostnotiI{id: string;}


@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  creador: string = '';
  private postnotiCollection: AngularFirestoreCollection<PostnotiI>;
  postnoti$: Observable<PostnotiI[]>;
  postnoti: Observable<PostnotiID[]>;

  constructor(private readonly afs: AngularFirestore) {
    this.postnotiCollection = afs.collection<PostnotiI>('postnoti');
    this.postnotiCollection = afs.collection<PostnotiI>('postnoti');
    this.postnoti = this.postnotiCollection.snapshotChanges().pipe(
      map(actions => actions.map (a=>{
        const data = a.payload.doc.data()as PostnotiI;
        const id = a.payload.doc.id;
        return { id, ... data};
      }))
    );
   }

   getAllPostNoti(){
    return this.postnoti;
  }

  addPostnoti(postnoti:PostnotiI){
    return this.postnotiCollection.add(postnoti);
  }

  

  getPostNotiByName() {
    const post  = this.afs.collection('postnoti', ref => ref.where('creador', '==', this.creador));
    return this.postnoti$ = post.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as PostnotiI;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }
}

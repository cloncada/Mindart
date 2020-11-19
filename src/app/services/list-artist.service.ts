
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {ArtistI} from '../ ../../models/artist.inteface';

export interface ArtistID extends ArtistI {id: string;}

@Injectable({
  providedIn: 'root'
})
export class ListArtistService {
  private artistCollection: AngularFirestoreCollection<ArtistI>;
  artistas: Observable<ArtistID[]>;

  constructor(private readonly afs:AngularFirestore) {
    this.artistCollection = afs.collection<ArtistI>('artistas');
    this.artistas = this.artistCollection.snapshotChanges().pipe(
      map(actions => actions.map( a => {
          const data = a.payload.doc.data() as ArtistI;
          const id = a.payload.doc.id;
          return {id, ...data};
      }))
    );

  }
  getAllArtist() {
    return this.artistas;
   }

   deleteArtist(id: string) {
    return this.artistCollection.doc(id).delete();
   }


}

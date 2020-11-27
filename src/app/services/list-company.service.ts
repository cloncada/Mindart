import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {CompanyI} from '../ ../../models/companies.interface';

export interface CompanyID extends CompanyI {id: string;}

@Injectable({
  providedIn: 'root'
})
export class ListCompanyService {
  private companyCollection: AngularFirestoreCollection<CompanyI>;
  company: Observable<CompanyID[]>;

  public selected = {
    id:null,
    email: '',
    name: '',
    nit: '',
    number: '',
    

  };


  constructor(private readonly afs:AngularFirestore) {
    this.companyCollection = afs.collection<CompanyI>('empresas');
    this.company = this.companyCollection.snapshotChanges().pipe(
      map(actions => actions.map( a => {
          const data = a.payload.doc.data() as CompanyI;
          const id = a.payload.doc.id;
          return {id, ...data};
      }))
    );

  }
  getAllCompany() {
    return this.company;
   }

  editCompany(companies: CompanyI ){

    return this.companyCollection.doc(companies.id).update(companies);

  }

  deleteCompany(id: string) {
    return this.companyCollection.doc(id).delete();
   }


}

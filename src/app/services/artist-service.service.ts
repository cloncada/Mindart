import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {auth} from 'firebase/app'
import {AngularFireAuth} from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})

export class ArtistServiceService {
constructor(public afAuth:AngularFireAuth){}
   async login(email:string,password:string){
const result =await this.afAuth.useEmulator;
return result;
   }

}

import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth} from '@angular/fire/auth';
import { first, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { User } from '../shared/models/user.interface';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import {RoleValidator} from '../auth/helpers/roleValidator'

@Injectable({providedIn: 'root'})
export class LoginEmpresasService extends RoleValidator {
  public user$: Observable<User>;
  public user:User;

  constructor(public afAuth: AngularFireAuth, private afs: 
    AngularFirestore) { 
      super();
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if(user){
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return of(null);
      })
    )
  }

  async login(email:string, password:string): Promise<User>{
    try{
      const {user} = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
        );
        this.updateUserData(user);
      return user;
    }
    catch (error){console.log(error)}
  }

  async register(email:string, password:string): Promise<User>{
    try{
    const {user} = await this.afAuth.createUserWithEmailAndPassword(
      email,
      password
      );
    return user;
    }
    catch(error){console.log(error);}
  }

  async logout(){
    try{
      await this.afAuth.signOut();
    }
    catch(error){console.log(error)}
  }

  getCurrentUser(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  private updateUserData(user: User){
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
      );

      const data:User = {
        uid: user.uid,
        email: user.email,
        role: 'EMPRESA',
      };
      return userRef.set(data ,{merge: true});
  }

}

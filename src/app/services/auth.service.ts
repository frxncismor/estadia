import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model'; // optional

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FirebaseApp } from '@angular/fire';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;
  usr: Observable<User>;
  userId: any;
  data: any;
  rol: any;
  isAdmin: any;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private fb: FirebaseApp
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        // Logged in
        if (user) {
          console.log(this.afs.doc<User>(`users/${user.uid}`).valueChanges());
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    );
    this.usr = this.afAuth.authState.pipe(
      switchMap(user => {
        // Logged in
        if (user) {
          console.log("USUARIO", user);
         return user.uid;
        } else {
          // Logged out
          return of(null);
        }
      })
    );
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    this.router.navigateByUrl('/welcome');
    return this.updateUserData(credential.user);
  }

  private updateUserData(user) {
    // Sets user data to firestore login
    console.log("userrrr", user);
    this.fb.auth().onAuthStateChanged( usr => {
      const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
      
        const data = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        };
        return userRef.set(data, {merge: true});
     
    });

    

  }

  async signOut() {
    await this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }

  async CurrentUser() : Promise<any>{
    this.fb.auth().onAuthStateChanged( async user => {
      console.log("user", user);
      if (user) {
        console.log('bien');
       var admin = await this.traerInformacion(user.uid);
       return admin
      }
    });
    console.log("ADMINSSS", this.isAdmin)
    var adminn = await this.isAdmin
    return adminn
  }

  esAdmin(rol?){
    if(rol == 'Administrador'){
      console.log("SIIIII")
      return true;
    } else {
      return false;
    }
  }

   traerInformacion(uid){
    var rol
    this.getUserInfo(uid).subscribe( async US => {
      console.log("US",US);
      rol = US.rol;
      this.isAdmin = await this.esAdmin(rol);
    });
    var admin = this.isAdmin
    return admin
  }

  getUserInfo( uid : string) : any{
    return this.afs.collection('users').doc(uid).valueChanges();
  }
  

  makeAdmin(uid) {
    return  this.afs.collection('users').doc(uid).update({
              rol: { admin: true, user: false }
              
            });
  }

  makeUser(uid) {
    return  this.afs.collection('users').doc(uid).update({
            rol: { admin: false, user: true }
            });
  }
  
  graphYes(uid){
    return  this.afs.collection('users').doc(uid).update({
      graficas: true
    });
  }

  graphNo(uid){
    return  this.afs.collection('users').doc(uid).update({
     graficas: false
    });
  }


}

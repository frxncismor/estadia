import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesModule } from './componentes/componentes.module';
import { firebase } from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { config } from 'rxjs';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { firestore } from 'firebase';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UnauthComponent } from './pages/unauth/unauth.component';

const firebaseConfig = {
  apiKey: "AIzaSyB1bL5JURTc0KVLExWaZAlSPIAb7PsoJmQ",
  authDomain: "testhosting-23ad5.firebaseapp.com",
  databaseURL: "https://testhosting-23ad5.firebaseio.com",
  projectId: "testhosting-23ad5",
  storageBucket: "testhosting-23ad5.appspot.com",
  messagingSenderId: "12079392665",
  appId: "1:12079392665:web:a973034f71fe7e74e09508",
  measurementId: "G-FSYG13P863"
};

@NgModule({
  declarations: [
    AppComponent,
    UnauthComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    ComponentesModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

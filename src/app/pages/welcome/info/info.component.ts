import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FirebaseApp } from '@angular/fire';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor(public auth: AuthService, private fb: FirebaseApp ) { }

  public userId : any;
  public data : any;
  ngOnInit(): void {
    this.CurrentUser();
  }

  CurrentUser() {
    this.fb.auth().onAuthStateChanged( user => {
      if (user) {
        this.userId = user.uid;
        console.log('bien');
        this.traerInformacion();
      }
    });
  }

  traerInformacion() {
    this.auth.getUserInfo(this.userId).subscribe(US => {
      console.log(US);
      this.data = US;
    });
  }

  makeUser(){
    this.auth.makeUser(this.userId);
  }

  makeAdmin(){
    this.auth.makeAdmin(this.userId);
  }

  yes(){
    this.auth.graphYes(this.userId);
  }

  no(){
    this.auth.graphNo(this.userId);
  }



}

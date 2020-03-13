import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  roles: any[];
  constructor(public auth: AuthService) { }

  ngOnInit() {
    var roles;
    this.auth.getRoles().subscribe(data => {
        roles = data.map(e => {
          return e.payload.doc.data()
        })
        this.roles = roles[0];
        console.log("RES", this.roles);
    });
  }

}

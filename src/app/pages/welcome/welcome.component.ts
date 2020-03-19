import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  async rol(){
    var isAdmin = await this.auth.CurrentUser();
    console.log("ROL", isAdmin)
  }
}

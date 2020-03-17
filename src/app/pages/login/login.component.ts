import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private route: Router, public auth: AuthService) { }

  ngOnInit(): void {}

  login() {
    this.auth.googleSignin();
    console.log(this.auth.googleSignin);
  }

  }

  



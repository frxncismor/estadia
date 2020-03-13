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

  public LoginForm : any = {
    user: '',
    pass: ''
  };
  
  public error;
  constructor(private route: Router, private auth : AuthService) { }

  ngOnInit(): void {}

  login(user, pass){
    console.log("Usuario y contraseña ", user, pass);
    this.auth.login(user, pass).catch(error =>{
      if(error){
        console.log("ERROR", error.message)
        this.error = error.message;
      }
    });



  }

  


}

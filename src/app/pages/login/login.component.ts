import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  private LoginSuccess : any = {
    user: 'test',
    pass: '123'
  };

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  login(user, pass){
    console.log("LoginForm: ", this.LoginForm);
    console.log("Usuario y contraseña ", user, pass);
    if(user == this.LoginSuccess.user && pass == this.LoginSuccess.pass){
      this.route.navigateByUrl('/home');
    }
  }

}

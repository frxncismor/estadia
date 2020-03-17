import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( private route: Router,public auth: AuthService ) {
    console.log("UrlActual: ", this.route.url);
    console.log("UsuarioActual: ", this.auth.usr);
   }

  ngOnInit(): void {
    console.log("UsuarioActual: ", this.auth.usr);

    

  }

  Home(){
    this.route.navigateByUrl('/');
  }

  login() {
    this.route.navigateByUrl('/login');
  }


}

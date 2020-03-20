import { Component, OnInit } from "@angular/core";
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  comenzar: any = false;

 

  constructor(private route: Router, public auth: AuthService) {}

  ngOnInit(): void {}

  begin() {
    this.route.navigateByUrl('/menu')
  }
 
  Perfil() {
    this.route.navigateByUrl('/welcome');
  }

 
}

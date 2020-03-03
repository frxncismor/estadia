import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  areas: any = [
    {nombre: 'Administrador', path: '/home'},
    {nombre: 'Login', path: '/login'},
  ];

  constructor( private route: Router) { }

  ngOnInit(): void {
  }


}

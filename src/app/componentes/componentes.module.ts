import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

const Componentes = [
    NavbarComponent
];


@NgModule({
  declarations: [
    Componentes
  ],
  imports: [
    CommonModule,
    RouterModule
  ], 
  exports: [
    Componentes,
  ]
})
export class ComponentesModule { }

import { Component, OnInit } from "@angular/core";
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  comenzar: any = false;

  secciones = [
    {
      id: 'who',
      title: "¿Quien realiza el proyecto?",
      description: "Conoce quien está detras del proyecto",
      img: "https://cdn.lynda.com/course/182920/182920-637159212085301134-16x9.jpg",
      class: 'btn btn-primary btn-lg',
      animate : 'animated fadeInLeft'
    },
    {
      id: 'what',
      title: "¿De que se trata el proyecto?",
      description: "Te explicamos como funciona el proyecto",
      img: 'https://www.hiretheyouth.org/wp-content/uploads/2018/09/Project-Collaboration.jpg',
      class: 'btn btn-danger btn-lg',
      animate : 'animated fadeInRight'
    },
    { 
      id: 'obj', 
      title: "Objetivos", 
      description: "Conoce los objetivos que se pretenden cumplir y cuales se cumplen",
      img: 'https://promocionmusical.es/wp-content/uploads/2018/01/x441605-636269220092757522-16x9-810x456.jpg.pagespeed.ic.strWc0bCiJ.jpg',
      class: 'btn btn-warning text-white btn-lg',
      animate : 'animated fadeInLeft'
    },
    { 
      id: 'tech', 
      title: "Tecnologias", 
      description: "Conoce las tecnologías con las que se creó el proyecto",
      img: 'https://finanz.com.mx/wp-content/uploads/2018/06/incertidumbre.jpg',
      class: 'btn btn-info btn-lg',
      animate : 'animated fadeInRight'
    }
  ];

  constructor(private route: Router) {}

  ngOnInit(): void {}

  begin() {
    this.comenzar = true;
  }

  back2begin() {
    this.comenzar = false;
  }

  knowMore(id) {
    console.log("ID: ", id);
    switch (id) {
      case 'who':
        this.route.navigateByUrl('/about-who');
        break;
      case 'what':
        this.route.navigateByUrl('/about-what');
        break;
      case 'obj':
        this.route.navigateByUrl('/about-objectives');
        break;
      case 'tech':
        this.route.navigateByUrl('/about-technologies');
        break;
    }
  }
}

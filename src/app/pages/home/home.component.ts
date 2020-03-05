import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  comenzar: any = false;

  secciones = [
    {
      id: 1,
      title: "¿Quien realiza el proyecto?",
      description: "Descripcion enorme",
      img: "https://cdn.lynda.com/course/182920/182920-637159212085301134-16x9.jpg",
      class: 'btn btn-primary btn-lg'
    },
    {
      id: 2,
      title: "¿De que se trata el proyecto?",
      description: "Descripcion enorme",
      img: 'https://www.hiretheyouth.org/wp-content/uploads/2018/09/Project-Collaboration.jpg',
      class: 'btn btn-danger btn-lg'
    },
    { 
      id: 3, 
      title: "Objetivos", 
      description: "Descripcion enorme",
      img: 'https://promocionmusical.es/wp-content/uploads/2018/01/x441605-636269220092757522-16x9-810x456.jpg.pagespeed.ic.strWc0bCiJ.jpg',
      class: 'btn btn-warning text-white btn-lg'
    },
    { 
      id: 4, 
      title: "Tecnologias", 
      description: "Descripcion enorme",
      img: 'https://finanz.com.mx/wp-content/uploads/2018/06/incertidumbre.jpg',
      class: 'btn btn-info btn-lg'
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  begin() {
    this.comenzar = true;
  }

  back2begin() {
    this.comenzar = false;
  }

  knowMore(id) {
    console.log("ID: ", id);
  }
}

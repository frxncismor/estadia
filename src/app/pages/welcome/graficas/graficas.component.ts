import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-graficas",
  templateUrl: "./graficas.component.html",
  styleUrls: ["./graficas.component.scss"]
})
export class GraficasComponent implements OnInit {
  
  labels: any = [
    {name1: ''},
    {name2: ''},
    {name3: ''},
  ];

  numbers: any = [
    {data1: 0},
    {data2: 0},
    {data3: 0},
  ];
  
  colors: any = ["#FF6384", "#36A2EB", "#FFCE56"];
  hoverColors: any = ["#FF6384", "#36A2EB", "#FFCE56"];

  data: any = {
    labels: ["A", "B", "C"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: this.colors,
        hoverBackgroundColor: this.hoverColors
      }
    ]
  };
  

  
  constructor() {}

  ngOnInit(): void {}

  update(name1, name2, name3, number1, number2, number3) {
    console.log("LABELS", this.labels);
    this.data = {
      labels: [name1, name2, name3],
      datasets: [
        {
          data: [number1, number2, number3],
          backgroundColor: this.colors,
          hoverBackgroundColor: this.hoverColors
        }
      ]
    };
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  comenzar: any = false;

  constructor() { }

  ngOnInit(): void {
  }

  begin() {
    this.comenzar = true;
  }

  back2begin(){
    this.comenzar = false;
  }

}

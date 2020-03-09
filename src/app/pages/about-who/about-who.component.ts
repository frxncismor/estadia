import { Component, OnInit } from '@angular/core';
import { Router, RouteConfigLoadEnd } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-about-who',
  templateUrl: './about-who.component.html',
  styleUrls: ['./about-who.component.scss']
})
export class AboutWhoComponent implements OnInit {

  title: any = "sobre mi";
  title2: any = "conocimientos"
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  back2begin(){
    this.route.navigateByUrl('/');
  }


}

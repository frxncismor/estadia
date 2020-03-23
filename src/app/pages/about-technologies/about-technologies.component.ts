import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-technologies',
  templateUrl: './about-technologies.component.html',
  styleUrls: ['./about-technologies.component.scss']
})
export class AboutTechnologiesComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit(): void {
  }

  back2begin(){
    this.route.navigateByUrl('/menu');
  }

}

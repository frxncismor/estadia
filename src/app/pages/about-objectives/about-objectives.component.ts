import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-objectives',
  templateUrl: './about-objectives.component.html',
  styleUrls: ['./about-objectives.component.scss']
})
export class AboutObjectivesComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit(): void {
  }

  back2begin(){
    this.route.navigateByUrl('/menu');
  }

}

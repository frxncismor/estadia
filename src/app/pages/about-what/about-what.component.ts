import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-what',
  templateUrl: './about-what.component.html',
  styleUrls: ['./about-what.component.scss']
})
export class AboutWhatComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  back2begin(){
    this.route.navigateByUrl('/menu');
  }

}

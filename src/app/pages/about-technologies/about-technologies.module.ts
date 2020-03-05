import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutTechnologiesComponent } from './about-technologies.component';
import { AboutTechnologiesRoutingModule } from './about-technologies-routing.module';



@NgModule({
  declarations: [AboutTechnologiesComponent],
  imports: [
    CommonModule,
    AboutTechnologiesRoutingModule
  ]
})
export class AboutTechnologiesModule { }

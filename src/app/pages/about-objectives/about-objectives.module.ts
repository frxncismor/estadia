import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutObjectivesComponent } from './about-objectives.component';
import { AboutObjectivesRoutingModule } from './about-objectives-routing.module';




@NgModule({
  declarations: [AboutObjectivesComponent],
  imports: [
    CommonModule,
    AboutObjectivesRoutingModule
  ]
})
export class AboutObjectivesModule { }

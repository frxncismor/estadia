import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutWhatComponent } from './about-what.component';
import { AboutWhatRoutingModule } from './about-what-routing.module';



@NgModule({
  declarations: [AboutWhatComponent],
  imports: [
    CommonModule,
    AboutWhatRoutingModule
  ]
})
export class AboutWhatModule { }

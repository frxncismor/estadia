import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutWhoComponent } from './about-who.component';
import { AboutWhoRoutingModule } from './about-who-routing.module';



@NgModule({
  declarations: [AboutWhoComponent],
  imports: [
    CommonModule,
    AboutWhoRoutingModule
  ]
})
export class AboutWhoModule { }

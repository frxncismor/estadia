import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RouterModule } from "@angular/router";
import { AboutWhoComponent } from './about-who.component';

const routes = [{ path: '', component: AboutWhoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutWhoRoutingModule {}

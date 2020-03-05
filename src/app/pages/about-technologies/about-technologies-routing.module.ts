import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AboutTechnologiesComponent } from './about-technologies.component';




const routes = [{ path: '', component: AboutTechnologiesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutTechnologiesRoutingModule {}

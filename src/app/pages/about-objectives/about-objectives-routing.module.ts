import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AboutObjectivesComponent } from './about-objectives.component';



const routes = [{ path: '', component: AboutObjectivesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutObjectivesRoutingModule {}

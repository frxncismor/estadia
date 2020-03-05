import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AboutWhatComponent } from './about-what.component';


const routes = [{ path: '', component: AboutWhatComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutWhatRoutingModule {}

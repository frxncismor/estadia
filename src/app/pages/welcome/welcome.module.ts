import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { InfoComponent } from './info/info.component';
import { AdminComponent } from './admin/admin.component';
import { GraficasComponent } from './graficas/graficas.component';
import {ChartModule} from 'primeng/chart';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [WelcomeComponent, InfoComponent, AdminComponent, GraficasComponent],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    ChartModule,
    FormsModule
  ]
})
export class WelcomeModule { }

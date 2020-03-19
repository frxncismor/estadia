import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RouterModule } from "@angular/router";
import { WelcomeComponent } from './welcome.component';
import { InfoComponent } from './info/info.component';
import { AdminComponent } from './admin/admin.component';
import { GraficasComponent } from './graficas/graficas.component';
import { IsAdminGuard } from 'src/app/guards/is-admin.guard';
import { UnauthorizedComponent } from '../unauthorized/unauthorized.component';
import { UnauthComponent } from '../unauth/unauth.component';
import { NotAuthenticatedGuard } from 'src/app/guards/not-authenticated.guard';


const routes = [
  { path: '', component: WelcomeComponent, children: [
    {path: '', component: InfoComponent},
    { path: 'info', component: InfoComponent },
    { path: 'admin', component: AdminComponent, canActivate: [NotAuthenticatedGuard] },
    { path: 'graph', component: GraficasComponent},
    { path: 'unauthorized', component: UnauthComponent},

  ] }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule {}

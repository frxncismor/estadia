import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
  { path: 'about-who', loadChildren: () => import('./pages/about-who/about-who.module').then(m => m.AboutWhoModule)},
  { path: 'about-what', loadChildren: () => import('./pages/about-what/about-what.module').then(m => m.AboutWhatModule)},
  { path: 'about-objectives', loadChildren: () => import('./pages/about-objectives/about-objectives.module').then(m => m.AboutObjectivesModule)},
  { path: 'about-technologies', loadChildren: () => import('./pages/about-technologies/about-technologies.module').then(m => m.AboutTechnologiesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

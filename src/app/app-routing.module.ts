import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'unauthorized', loadChildren: () => import('./pages/unauthorized/unauthorized.module').then(m => m.UnauthorizedModule)},
  { path: 'about-who', loadChildren: () => import('./pages/about-who/about-who.module').then(m => m.AboutWhoModule)},
  { path: 'about-what', loadChildren: () => import('./pages/about-what/about-what.module').then(m => m.AboutWhatModule)},
  { path: 'about-objectives', loadChildren: () => import('./pages/about-objectives/about-objectives.module').then(m => m.AboutObjectivesModule)},
  { path: 'about-technologies', loadChildren: () => import('./pages/about-technologies/about-technologies.module').then(m => m.AboutTechnologiesModule)},
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule), canActivate: [AuthGuard]},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

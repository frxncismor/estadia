import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


import { tap, map, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private auth: AuthService, private route: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    return this.auth.user$.pipe(
      take(1),
      map(user => user && user.rol.admin ? true : false),
      tap(isAdmin => {
        if (!isAdmin) {
          this.route.navigateByUrl('/welcome/unauthorized');
          console.error('Access denegado - Solo admins')
        }
      })
    );

  }
}

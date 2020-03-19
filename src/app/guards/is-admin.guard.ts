import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivateChild {
  constructor(private AFauth : AngularFireAuth,
    private router : Router){}
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.AFauth.authState.pipe(map( auth => {
          console.log("AUTH", auth)
          if(isNullOrUndefined(auth))
          {
            return true;
          }
          else
          {
            this.AFauth.user.subscribe(res =>{
              console.log("res", res);
            })
            this.router.navigate(['unauthorized']);
            return false;
          }
        }))
      }
  }

  // return new Promise(resolve =>
  //   this.auth.isLoggednIn()
  //     .then(status: boolean => {
  //       if(status === false) {
  //         this.myRoute.navigate(["login"]);
  //       }
  //       resolve(status);
  //     })
  //     .catch(() => {
  //       this.myRoute.navigate(["login"]);
  //       resolve(false);
  //       // ... or any other way you want to handle such error case
  //     })
  


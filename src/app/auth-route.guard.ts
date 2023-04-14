import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthRouteGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {

      let usrRole = localStorage.getItem('userRole');
      if(usrRole == 'admin'){
        return true;
      }

else {
    alert('you are not authorized to visit this page');
    return false;
}
  }
  
}

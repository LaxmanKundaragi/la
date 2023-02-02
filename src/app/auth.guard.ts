import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SellerService } from './services/seller.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private sellerService:SellerService){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //  return false; /* if i do here true then is automatically redirect to another page  if we do here false then it will not redirect*/
    
    if(localStorage.getItem('seller'))
    {
      return true
    }
        return this.sellerService.isSellerLoggedIn;
  }

}
/*
Auth Gurad is used for Authentication..
SYNTAX:
==========
ng g guard auth_name      

*/
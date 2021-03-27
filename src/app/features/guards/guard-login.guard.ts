import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
// import { SessionStorageService } from '../services/session-storage-service';

@Injectable({
  providedIn: 'root'
})
export class GuardLoginGuard implements CanActivate {

  constructor(private router:Router,
    //  private sessionStorage: SessionStorageService
     ){}

 canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // let token = this.sessionStorage.get('uid');
      let token =  localStorage.getItem('user');

      console.log(state.url)
      if(token){
        this.router.navigate(['/products/list-products'])
        return false;
      }else{
        //console.log("demacidos redireccionamientos");
        return true;
      }
  }
  
}

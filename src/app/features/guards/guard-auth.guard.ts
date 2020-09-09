import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
// import { SessionStorageService } from '../services/session-storage-service'
@Injectable({
  providedIn: 'root'
})
export class GuardAuthGuard implements CanActivate, CanActivateChild {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  constructor(private authService: AuthService, private router: Router,
    //  private sessionStorage: SessionStorageService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url: string = state.url;
    // let uid: any = this.sessionStorage.get('uid');
    let uid: any = localStorage.getItem('user');
    if (uid) {
      console.log("REDIRIJIENDO 1");
      return true;
    } else {
      this.router.navigateByUrl('/login')
      return false
    }

    // this.http.get('')
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(this.route, state);
  }

  
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DecodeTokenService } from './decode-token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService implements CanActivate { 

  constructor( private router: Router,
               private decodeToken: DecodeTokenService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
      if(!this.userLogado()){
        this.router.navigate(['/login']);
      }
      return true;
  }
  userLogado():boolean{
    let token = this.decodeToken.decodeTokenJWT()
    return token != ""
  }
   
  }

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DecodeTokenService } from './decode-token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  userLogado: any = {}
  constructor( private decodeToken: DecodeTokenService,
    private router: Router) { this.pegarPerfilUsuarioConectado}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if(!this.temUsuarioLogado()){
      this.router.navigate(['/login'])
      return false
    }
    if(!this.ehAdministrador()){
      this.router.navigate(['/erro'])
    }
    return true;
  }
  
  ehAdministrador(){

    let token =  JSON.stringify(this.decodeToken.decodeTokenJWT())
    console.log(`token ${token}`)
    let ob = JSON.parse(token)
    console.log(`Conectado com ${ob.perfil}`)
    return ob.perfil == "ADM"
    

  }

  temUsuarioLogado(): boolean {
    let token = this.decodeToken.decodeTokenJWT()
    return token != "";
  }
  pegarPerfilUsuarioConectado(){

    let user: (string | null) = localStorage.getItem("userConectado")
    if(user != null){
    user = JSON.parse(user)
    this.userLogado = user

    }  

  }
}
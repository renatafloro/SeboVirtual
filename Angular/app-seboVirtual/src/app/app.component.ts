import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthguardService } from './authguard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-seboVirtual';
  
  usuarioLogado: any ={};
  administrador:boolean = true
  usuarioConectado: boolean = false


  pegarPerfilUsuarioConectado(){
    let user: (string | null) = localStorage.getItem("userConectado")
    if(user != null)
       user = JSON.parse(user)
    this.usuarioLogado = user
    console.log(this.usuarioLogado)
  }

constructor(
  private router: Router,private AuthGuardSevice: AuthguardService){
  this.pegarPerfilUsuarioConectado();
  this.administrador = this.AuthGuardSevice.ehAdministrador();
  this.usuarioConectado = this.AuthGuardSevice.temUsuarioLogado();
}


  logout(){
    localStorage.removeItem("userLogado")
    this.router.navigate(['/home'])
  }
}



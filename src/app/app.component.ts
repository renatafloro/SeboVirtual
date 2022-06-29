import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthguardService } from './authguard.service';
import { Usuario } from './models/usuario.model';

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
    let user: (string | null) = localStorage.getItem("userLogado")
    if(user != null) {
      user = JSON.parse(user)
      this.usuarioConectado = true;
    }
    this.usuarioLogado = user
  }

constructor(
  private router: Router,private AuthGuardSevice: AuthguardService){
  this.pegarPerfilUsuarioConectado();
  this.administrador = this.AuthGuardSevice.ehAdministrador();
  this.usuarioConectado = this.AuthGuardSevice.temUsuarioLogado();

}


  logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("userLogado")
    localStorage.removeItem("administrador")
    this.administrador= false
    this.usuarioConectado = false;
    this.router.navigate(['/home'])

  }
}

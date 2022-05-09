import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-seboVirtual';
  usuarioLogado: any ={};


navbarUsuarioConectado(){
  let usuario: string | null = localStorage.getItem('usuarioLogado');
  if( usuario != null){
    usuario = JSON.parse(usuario);
    this.usuarioLogado = usuario;
  }
}

constructor(){
  this.navbarUsuarioConectado();
}

logout(){
  localStorage.removeItem("usuarioLogado")
  window.location.reload()
}
}


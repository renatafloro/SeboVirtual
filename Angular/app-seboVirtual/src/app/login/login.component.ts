import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { RouterLink } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { DecodeTokenService } from '../decode-token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthenticationService,
    private decodeToken: DecodeTokenService
    ) { }

  usuarios: any = []

  usuarioLogado= {
    nome: "",
    email: "",
    senha: "",
    cpf: "",
    perfil: ""
  }

  logar(form: any){
    this.auth.logar(form.email, form.senha).subscribe(
      token =>{
        localStorage.setItem('token',JSON.stringify(token))}
    )
  }

  verToken(){
    let usuario = this.decodeToken.decodeTokenJWT()
    console.log(usuario)

  }

  /*fazerLogin(dados: any){

    this.UsuarioService.getAll().subscribe(x => {
      this.usuarios = x
      this.verificarLogin(dados.email, dados.senha, this.usuarios)
    })
  }
*/
  verificarLogin(email: string, senha: string, dados: any){
    
    for(let i = 0; i < dados.length; i++) {
      if( email == dados[i].email && senha == dados[i].senha) {
        this.usuarioLogado.nome = dados[i].nome
        this.usuarioLogado.email = dados[i].email
        this.usuarioLogado.senha = dados[i].senha
        this.usuarioLogado.cpf = dados[i].cpf
        this.usuarioLogado.perfil = dados[i].perfil
        this.gravarDadosLocalStorage()
      }
    }
  }

  gravarDadosLocalStorage(){
    localStorage.setItem("userLogado", JSON.stringify(this.usuarioLogado))
  }

  ngOnInit(): void {
  }

}

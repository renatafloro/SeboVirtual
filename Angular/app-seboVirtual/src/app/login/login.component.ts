import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { DecodeTokenService } from '../decode-token.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private serviceUsuario: UsuarioService,
    private auth: AuthenticationService,
    private decodeToken: DecodeTokenService,
    private router: Router
    ) { }

  usuarios: any = []

  usuarioLogado= {
    id: "",
    nome: "",
    email: "",
    senha: "",
    cpf: "",
    perfil: ""
  }

  logar(form: any){
    this.auth.logar(form.email, form.senha).subscribe(
      token =>{
        localStorage.setItem('token',JSON.stringify(token));
        window.location.reload()
      }
    );
  }

  fazerLogin(dados: any){
    this.serviceUsuario.getAll().subscribe(x => {
    this.usuarios = x
    this.verificarLogin(dados.email, dados.senha, this.usuarios)
    })
  }

  verificarLogin(email: string, senha: string, dados: any){

    for(let i = 0; i < dados.length; i++) {
      if( email == dados[i].email && senha == dados[i].senha) {
        this.usuarioLogado.id = dados[i].id
        this.usuarioLogado.nome = dados[i].nome
        this.usuarioLogado.email = dados[i].email
        this.usuarioLogado.senha = dados[i].senha
        this.usuarioLogado.cpf = dados[i].cpf
        this.usuarioLogado.perfil = dados[i].perfil
        this.gravarDadosLocalStorage()
        this.router.navigate(['/home'])
      }
    }
  }

  gravarDadosLocalStorage(){
    localStorage.setItem("userLogado", JSON.stringify(this.usuarioLogado))
  }

  ngOnInit(): void {
  }
}

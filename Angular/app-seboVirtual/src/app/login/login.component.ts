import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { DecodeTokenService } from '../decode-token.service';
import { EmailValidator } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //loginError! : string ;

  constructor(
    private serviceUsuario: UsuarioService,
    private auth: AuthenticationService,
    private decodeToken: DecodeTokenService,
    private router: Router,
    ) { }

  usuarios: any = []

  usuarioLogado= {
    id: "",
    nome: "",
    email: "",
    cpf: "",
    perfil: ""
  }

  ngOnInit(): void {

  }

  logar(form: any){
    this.auth.logar(form.email, form.senha).subscribe(
      token =>{
        this.preArmazenarUsuarioLocalStorage(form.email, form.senha)
        localStorage.setItem('token',JSON.stringify(token));
        this.router.navigate(['/home']);

      },
      error=>{
        if(error.status == 401){
            console.log("Usuário ou senha não encontrados!")

        }

      }
    )
  }


  preArmazenarUsuarioLocalStorage(email: string, senha: string){
    this.serviceUsuario.getAll().subscribe(x => {
    this.usuarios = x
    this.verificarLogin(email, senha, this.usuarios)
    })
  }

  verificarLogin(email: string, senha: string, dados: any){

    for(let i = 0; i < dados.length; i++) {
      if(email == dados[i].email) {
        this.usuarioLogado.id = dados[i].id
        //console.log(`Verificar login ${this.usuarioLogado.id}`)
        this.usuarioLogado.nome = dados[i].nome
        this.usuarioLogado.email = dados[i].email
        this.usuarioLogado.cpf = dados[i].cpf
        this.usuarioLogado.perfil = dados[i].perfil
        this.gravarDadosLocalStorage()
        this.router.navigate(['/home'])
      }
    }
    window.location.reload()
  }

  gravarDadosLocalStorage(){
    localStorage.setItem("userLogado", JSON.stringify(this.usuarioLogado))
  }
}

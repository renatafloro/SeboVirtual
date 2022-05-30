import { AuthguardService } from './../authguard.service';
import { Component, OnInit } from '@angular/core';
import { CadastroUsuarioService } from '../cadastro-usuario.service';



@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  listaEstados: any;
  listaPerfis: any;

  constructor(private service :  CadastroUsuarioService) {
    this.listaEstados = this.getAllUFs();
    this.listaPerfis = this.getAllPerfis();
  }

  ngOnInit(): void {


  }
  salvar(usuarioForm: any){
      this.service.metodoPost(usuarioForm.value).subscribe(
        ok =>{ console.log(ok)
          alert('Usuário cadastrado com sucesso');
        }
        ,
        error => {console.error(error)
        alert('Erro no cadastro');

        }

      )}

      private getAllUFs(): Array<any>{
        return [
          {
            sigla: "AC",
            nome: "Acre"
          },
          {
            sigla: "AL",
            nome: "Alagoas"
          },
          {
            sigla: "AP",
            nome: "Amapá"
          },
          {
            sigla: "AM",
            nome: "Amazonas"
          },
          {
            sigla: "BA",
            nome: "Bahia"
          },
          {
            sigla: "CE",
            nome: "Ceará"
          },
          {
            sigla: "DF",
            nome: "Distrito Federal"
          },
          {
            sigla: "ES",
            nome: "Espírito Santo"
          },
          {
            sigla: "GO",
            nome: "Goiás"
          },
          {
            sigla: "MA",
            nome: "Maranhão"
          },
          {
            sigla: "MT",
            nome: "Mato Grosso"
          },
          {
            sigla: "MS",
            nome: "Mato Grosso do Sul"
          },
          {
            sigla: "MG",
            nome: "Minas Gerais"
          },
          {
            sigla: "PA",
            nome: "Pará"
          },
          {
            sigla: "PB",
            nome: "Paraiba"
          },
          {
            sigla: "PR",
            nome: "Paraná"
          },
          {
            sigla: "PE",
            nome: "Pernambuco"
          },
          {
            sigla: "PI",
            nome: "Piauí"
          },
          {
            sigla: "RJ",
            nome: "Rio de Janeiro"
          },
          {
            sigla: "RN",
            nome: "Rio Grande do Norte"
          },
          {
            sigla: "RS",
            nome: "Rio Grande do Sul"
          },
          {
            sigla: "RO",
            nome: "Rondônia"
          },
          {
            sigla: "RR",
            nome: "Roraima"
          },
          {
            sigla: "SC",
            nome: "Santa Catarina"
          },
          {
            sigla: "SP",
            nome: "São Paulo"
          },
          {
            sigla: "SE",
            nome: "Sergipe"
          },
          {
            sigla: "TO",
            nome: "Tocantins"
          },
          {
            sigla: "EX",
            nome: "Estrangeiro"
          }
        ]
      }

      private getAllPerfis(): Array<any>{
      return [
        {nome: "Vendedor", type: "ADMIN"},
        {nome: "Cliente", type: "USER"}
      ]
      }
}

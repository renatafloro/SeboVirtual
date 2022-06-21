import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { ProdutoService } from '../produto.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {
  msg: string = ""
  produtos: any;
  categorias: any;



  constructor(private serviceProduto: ProdutoService, private serviceCategoria: CategoriaService,  private snackbBar: MatSnackBar) {
    this.serviceProduto.getAll().subscribe(x => this.produtos = x)
    this.serviceCategoria.getAll().subscribe(x=> this.categorias =x)
    }

  gravar(dados: any){
    dados.categoria = {id: dados.categoria }
    this.serviceProduto.gravar(dados).subscribe(x => window.location.reload())
  }

  limparMsg(){
    this.msg = "";
  }

  ngOnInit(): void {

  }

  excluir(id:number){
    console.log(id);
    this.serviceProduto.excluir(id).subscribe(x =>
      {

        //alert("Produto excluído com sucesso!")
        window.location.reload()
        this.snackbBar.open('Produto excluído com sucesso!', 'x', {
          duration: 100000,

        });
      });
  }

}

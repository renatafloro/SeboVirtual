import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLoginService } from '../auth-login.service';
import { CarrinhoService } from '../carrinho.service';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../models/categoria.model';
import { Produto } from '../models/produto.model';
import { ProdutoService } from '../produto.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-consulta-produto',
  templateUrl: './consulta-produto.component.html',
  styleUrls: ['./consulta-produto.component.css']
})
export class ProdutoComponent implements OnInit {

  listaProdutos: Produto[]= [];
  categorias: Categoria[]= [];

  searchTerm: any;
  constructor(private produtoService: ProdutoService,
              private categoriaService: CategoriaService,
              private router: Router,
              private carrinhoService: CarrinhoService,
              private auth: AuthLoginService,
              private snackbBar: MatSnackBar,

              ){}

  ngOnInit(): void {
    this.produtoService.getAllDisponiveis().subscribe(x => {
      this.listaProdutos = x
      console.log(this.listaProdutos)
    })
    this.categoriaService.getAll().subscribe(x=> this.categorias = x)
  }

  getProdutoById(id: number){
    //this.auth.userLogado() == true
    if (true) {
      let produtoEncontrado= this.listaProdutos.find(prod => prod.id === id)
      if(produtoEncontrado!=undefined){
        this.adicionarProdutoNoCarrinho(produtoEncontrado)
    }
    console.log(produtoEncontrado)
    } else {
        this.snackbBar.open('Entre na sua conta para realizar a compra.', 'x', {
        duration: 50000,

      });

      this.router.navigate(['/login'])
    }
  }

  private adicionarProdutoNoCarrinho(produto: Produto){
    this.carrinhoService.adicionar(produto)
  }
}

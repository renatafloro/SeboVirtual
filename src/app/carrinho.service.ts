import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from './models/produto.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private url: string = 'https://xperiencebook.herokuapp.com/carrinho';
  private produtosCarrinho: Produto[]= [];
  
  constructor(private http: HttpClient,
    private snackbBar: MatSnackBar) {}

  public adicionar(produto: Produto) {
    //alert(`Produto ${produto.id} adicionado ao carrinho.`)
    this.snackbBar.open('Produto adicionado ao carrinho.', 'x', {
      duration: 50000,
 });
    this.produtosCarrinho.push(produto);
  }
  public listarItens(): Produto[]{
   return this.produtosCarrinho
  }
  limpar(){
    this.produtosCarrinho=[];
    return this.produtosCarrinho
  }
  excluir(idproduto: number):void {
    let index= this.produtosCarrinho.findIndex(prod=>prod.id=== idproduto)

    if(index !== undefined){
      this.produtosCarrinho.splice(index,1)
    }
  }
}

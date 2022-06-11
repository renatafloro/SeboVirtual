import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from './models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private url: string = 'http://localhost:8080/carrinho';
  private produtosCarrinho: Produto[]= [];
  
  constructor(private http: HttpClient) {}

  public adicionar(produto: Produto) {
    alert(`Produto ${produto.id} adicionado`)
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

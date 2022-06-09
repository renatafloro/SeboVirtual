import { Injectable } from '@angular/core';
import { Produto } from './models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private produtosCarrinho: Produto[]= [];
  constructor() { }

  public adicionar(produto: Produto) {
    alert(`Produto ${produto.id} adicionado`)
    this.produtosCarrinho.push(produto);
  }
  public listarItens(): Produto[]{
   return this.produtosCarrinho
  }

}

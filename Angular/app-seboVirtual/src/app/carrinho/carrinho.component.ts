import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { Produto } from '../models/produto.model';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements OnInit {
  listaProdutos: Produto[] = [];
  comprados= this.carrinhoService.listarItens();

  constructor(
    private carrinhoService: CarrinhoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listaProdutos = this.carrinhoService.listarItens();
  }

  limpar() {
    this.carrinhoService.limpar();
    window.location.reload()
  }

  finalizar() {

  }

  total() {
    return this.comprados.map((item) => item.preco).reduce((a, b) => a + b, 0);
  }
  
  excluir(id:number){
    this.carrinhoService.excluir(id) 
        alert("Produto excluído com sucesso!")
  }
}

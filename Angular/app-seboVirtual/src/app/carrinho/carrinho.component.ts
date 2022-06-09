import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { Produto } from '../models/produto.model';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  listaProdutos: Produto[]= [];
  
  constructor(
    private carrinhoService: CarrinhoService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.listaProdutos= this.carrinhoService.listarItens()
  }
  limpar(){

  }
  finalizar(){

  }
  total(){
    return 0
  }

}

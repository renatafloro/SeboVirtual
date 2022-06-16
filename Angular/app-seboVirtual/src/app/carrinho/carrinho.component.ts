import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { Carrinho } from '../models/carrinho.model';
import { Produto } from '../models/produto.model';
import { Usuario } from '../models/usuario.model';
import { Venda } from '../models/venda.model';
import { VendaService } from '../venda.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements OnInit {
  listaProdutos: Produto[] = []
  usuario: any = {}
  comprados= this.carrinhoService.listarItens()
  valorTotal: number = 0

  constructor(
    private carrinhoService: CarrinhoService,
    private vendaService: VendaService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.listaProdutos = this.carrinhoService.listarItens();
    this.getUsuarioFromLocalStorage();
    this.calcularValorTotal();
  }

  limpar() {
    this.carrinhoService.limpar();
    window.location.reload()
  }

  finalizar() {
    console.log(this.usuario)
    if(this.usuario.id){
     let venda = this.montarVenda()
     this.vendaService.postVenda(venda).subscribe((resp: Venda)=>{
      this.carrinhoService.limpar()
      this.router.navigate(['/minhas-compras']);
      alert('Compra realizada com sucesso!');
    })
  }
    else{
      alert("É necessário estar logado para finalização da compra.")
      this.router.navigate(['/login']);
    }

  }

  calcularValorTotal() {
    this.valorTotal= this.comprados.map((item) => item.preco).reduce((a, b) => a + b, 0);
  }


  excluir(id:number){
    this.carrinhoService.excluir(id)
        alert("Produto excluído do carrinho.")
  }

  montarVenda():Venda{
    let venda = new Venda();
    venda.carrinho = []
    venda.data = new Date().toDateString()
    venda.idUsuario = this.usuario.id
    venda.valorTotal= this.valorTotal
    this.listaProdutos.map(item => {
      let carrinho = new Carrinho()
      carrinho.produto = item
      venda.carrinho.push(carrinho)
    })
    return venda
  }

  getUsuarioFromLocalStorage(){

    let user: (string | null) = localStorage.getItem("userLogado")
    console.log(user)
    if(user != null){
    user = JSON.parse(user)
    this.usuario = user

    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Venda } from '../models/venda.model';
import { VendaService } from '../venda.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-minhas-compras',
  templateUrl: './minhas-compras.component.html',
  styleUrls: ['./minhas-compras.component.css'],
})
export class MinhasComprasComponent implements OnInit {
  listaVendas: Venda[] = [];
  usuario: any = {};

  constructor(private vendaService: VendaService, private router: Router,private snackBar: MatSnackBar ) {
    this.getUsuarioFromLocalStorage()
  }

  ngOnInit(): void {
    //Se for fazer no dropdown, remover o if e else do logado e deixa apenas da linha 20 até a 25

    if (this.usuario.id) {
      this.vendaService.getVendasByUsuario(this.usuario.id).subscribe((x) => {
        if(x.length > 0){
          this.listaVendas = x;
        }else{
          //alert('Não há nenhuma compra realizada')
          this.snackBar.open('Não há nenhuma compra realizada', 'x', {
            duration: 50000,

          });
        }
      });
    } else {
      //alert('É necessário estar logado para visualizar suas compras!');
      this.snackBar.open('É necessário estar logado para visualizar suas compras!', 'x', {
        duration: 50000,

      });

      this.router.navigate(['/login']);
    }
  }

  getUsuarioFromLocalStorage() {
    let user: string | null = localStorage.getItem('userLogado');
    console.log(user);
    if (user != null) {
      user = JSON.parse(user);
      this.usuario = user;
    }
  }
}

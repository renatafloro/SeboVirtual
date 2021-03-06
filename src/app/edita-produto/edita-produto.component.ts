import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../categoria.service';
import { ProdutoService } from '../produto.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edita-produto',
  templateUrl: './edita-produto.component.html',
  styleUrls: ['./edita-produto.component.css']
})
export class EditaProdutoComponent implements OnInit {
    produto: any = {};
    msg: string = "";
    categorias: any;

    constructor(private route:ActivatedRoute,
      private router:Router,
      private serviceProduto: ProdutoService,
      private serviceCategoria: CategoriaService,
      private snackbBar: MatSnackBar,
      ) {
        this.serviceCategoria.getAll().subscribe(x=> this.categorias =x)
      }

  ngOnInit(): void {
    let routeParams = this.route.snapshot.paramMap;
    let idproduto: number = Number(routeParams.get('idproduto'))
    this.serviceProduto.getOne(idproduto).subscribe(x=> this.produto = x)

  }

  atualizar(): void {
    this.serviceProduto.update(this.produto).subscribe(x => this.categorias = x )
    this.router.navigate(["/cadastroproduto"]);
    this.snackbBar.open('Produto Editado com Sucesso!', 'x', {
      duration: 50000,

    });

    }

  }



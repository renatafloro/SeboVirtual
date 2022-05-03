import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-edita-produto',
  templateUrl: './edita-produto.component.html',
  styleUrls: ['./edita-produto.component.css']
})
export class EditaProdutoComponent implements OnInit {

  constructor(private route:ActivatedRoute,
              private router:Router,
              private serviceProduto: ProdutoService ) { }
    produto: any = {};
    msg: string = "";

  ngOnInit(): void {
    let routeParams = this.route.snapshot.paramMap;
    let idproduto: number = Number(routeParams.get('idproduto'))
    this.serviceProduto.getOne(idproduto).subscribe(x=> this.produto = x)
  }

  atualizar(): void {
    this.serviceProduto.update(this.produto).subscribe(x=> this.msg = "Atualizado com sucesso.")
    this.router.navigate(["/cadastroproduto"]);
    }
  }



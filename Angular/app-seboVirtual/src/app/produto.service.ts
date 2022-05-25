import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http:HttpClient) { }

  gravar(dados:any){
    let url =  'http://localhost:8080/cadprodutos'
    console.log(dados)
    return this.http.post(url, dados)

  }

  getAll(){
    let url = 'http://localhost:8080/produtos'
    return this.http.get(url)
  }

  getOne(idproduto: number){
    return this.http.get ('http://localhost:8080/produtos/:id')
  }

  update(dados: any){
    let url = ('http://localhost:8080/cadprodutos/:id')
    return this.http.put(url, dados)
  }

  excluir(idproduto:number){
    return this.http.delete('http://localhost:8080/produtos/:id')
  }
}
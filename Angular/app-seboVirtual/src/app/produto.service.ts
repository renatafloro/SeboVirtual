import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http:HttpClient) { }

  gravar(dados:any){
    console.log(dados)
    let url =  'http://localhost:8080/produto'
    return this.http.post(url, dados)

  }

  getAll(){
    let url = 'http://localhost:8080/produto'
    return this.http.get(url)
  }

  getOne(idproduto: number){
    return this.http.get (`http://localhost:8080/produto/${idproduto}`)
  }

  update(dados: any){
    let url = (`http://localhost:8080/produto/${dados.id}`)
    console.log(dados)
    return this.http.put(url, dados)
  }

  excluir(idproduto:number){
    return this.http.delete(`http://localhost:8080/produto/${idproduto}`)
  }
}

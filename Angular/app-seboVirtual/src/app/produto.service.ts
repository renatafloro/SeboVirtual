import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { Produto } from './models/produto.model';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private url: string = 'https://xperiencebook.herokuapp.com/produto';

  constructor(private http: HttpClient) {}

  gravar(dados: any) {
    return this.http.post(this.url, dados);
  }

  getAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url);
  }

  getOne(idproduto: number) {
    return this.http.get(`${this.url}/${idproduto}`);
  }

  update(dados: any) {
    let url = `${this.url}/${dados.id}`;
    console.log(dados);
    return this.http.put(url, dados);
  }

  excluir(idproduto: number) {
    return this.http.delete(`${this.url}/${idproduto}`);
  }
}

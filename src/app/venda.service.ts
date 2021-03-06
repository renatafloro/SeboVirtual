import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venda } from './models/venda.model';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  private url : string = 'https://xperiencebook.herokuapp.com/vendas'

  constructor(private http : HttpClient) { }

  getVendasByUsuario(idUsuario:number): Observable<Venda[]> {
    return this.http.get<Venda[]>(`${this.url}/${idUsuario}`);
  }

  postVenda(venda:Venda): Observable<Venda> {
    return this.http.post<Venda>(this.url,venda);
  }

}

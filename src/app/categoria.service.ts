import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './models/categoria.model';



@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private url: string= 'https://xperiencebook.herokuapp.com/categoria'

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.url)
  }

  getAllByName(nome : String){
    return this.http.get (`${this.url}/nome`)
  }
  
}
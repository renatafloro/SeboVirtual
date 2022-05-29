import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(){
    let url = 'http://localhost:8080/categoria'
    return this.http.get(url)
  }

  getOne(nome : String){
    return this.http.get ('http://localhost:8080/categoria/nome')
  }
}
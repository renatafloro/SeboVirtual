import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {}

  getAll(){
    return this.http.get('https://ms-usuarios.herokuapp.com/usuarios');
  }
  
  save(dados: any){

  }
}

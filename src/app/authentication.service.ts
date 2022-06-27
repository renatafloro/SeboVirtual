import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { LoginComponent } from './login/login.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(private http: HttpClient) {}

  logar(email: string, senha: string){
    return this.http.post('https://ms-usuarios.herokuapp.com/usuarios/login',{
      email: email,
      senha: senha
    })
  }
}

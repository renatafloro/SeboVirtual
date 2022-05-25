import { AuthguardService } from './../authguard.service';
import { Component, OnInit } from '@angular/core';
import { CadastroUsuarioService } from '../cadastro-usuario.service';



@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {



  constructor(private service :  CadastroUsuarioService) { }

  ngOnInit(): void {
    
    
  }
  salvar(usuarioForm: any){
      this.service.metodoPost(usuarioForm.value).subscribe(
        ok =>{ console.log(ok)
        }
        ,
        error => console.error(error)

      )}

  

}
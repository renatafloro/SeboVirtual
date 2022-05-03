import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ConsultaProdutoComponent } from './consulta-produto/consulta-produto.component';
import { EditaProdutoComponent } from './edita-produto/edita-produto.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
  path:'',
  component: HomeComponent
},
{
  path:'home',
  component: HomeComponent
},
{
  path: 'cadastroproduto',
  component: CadastroProdutoComponent
},
{
  path:'produtos/:idproduto',
  component: EditaProdutoComponent
},
{
  path: 'carrinho',
  component: CarrinhoComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path:'cadastrousuario',
  component: CadastroUsuarioComponent
},
{
  path:'consultaproduto',
  component: ConsultaProdutoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

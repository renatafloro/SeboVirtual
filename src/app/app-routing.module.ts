import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLoginService } from './auth-login.service';
import { AuthguardService } from './authguard.service';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProdutoComponent } from './produto/consulta-produto.component';
import { EditaProdutoComponent } from './edita-produto/edita-produto.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SobreComponent } from './sobre/sobre.component';
import { MinhasComprasComponent } from './minhas-compras/minhas-compras.component';

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
  component: CadastroProdutoComponent,
  canActivate: [AuthguardService]
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
{path : 'perfil/:idusuario',
 component: CadastroUsuarioComponent,
canActivate:[AuthLoginService]
},
{
  path:'cadastrousuario',
  component: CadastroUsuarioComponent
},
{
  path:'produto',
  component: ProdutoComponent
},

{
 path:'sobre',
 component: SobreComponent
},

{
  path:'rodape',
  component: RodapeComponent
},
{ path:'categoria',
  component: CategoriaComponent
},
{ path:'minhas-compras',
  component: MinhasComprasComponent,
  canActivate:[AuthLoginService]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

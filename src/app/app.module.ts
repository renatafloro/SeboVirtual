import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ProdutoComponent } from './produto/consulta-produto.component';
import { EditaProdutoComponent } from './edita-produto/edita-produto.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SobreComponent } from './sobre/sobre.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { MinhasComprasComponent } from './minhas-compras/minhas-compras.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    AppComponent,
    CadastroUsuarioComponent,
    CarrinhoComponent,
    HomeComponent,
    LoginComponent,
    PagamentoComponent,
    CadastroProdutoComponent,
    ProdutoComponent,
    EditaProdutoComponent,
    SobreComponent,
    RodapeComponent,
    CategoriaComponent,
    MinhasComprasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

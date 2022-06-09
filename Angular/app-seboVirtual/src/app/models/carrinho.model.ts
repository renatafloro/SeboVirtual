import { Produto } from "./produto.model";
import { Venda } from "./venda.model";

export class Carrinho {
    public id!: number;
    public quantidade!: number;
    public produto!: Produto;
    public venda!: Venda;

}

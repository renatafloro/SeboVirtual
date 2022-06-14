import { NumberFormatStyle } from "@angular/common";
import { Carrinho } from "./carrinho.model";

export class Venda {
    public id!:number;
    public data!:string;
    public idUsuario!:number;
    public carrinho!:Carrinho[];
}

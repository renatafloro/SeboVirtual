import { Categoria } from "./categoria.model";

export class Produto {
    public id!: number;
    public descricao!: string;
    public estoque!: number;
    public preco!: number;
    public foto!: string;
    public categoria!: Categoria; 
}

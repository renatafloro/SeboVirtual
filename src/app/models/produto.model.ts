import { Categoria } from "./categoria.model";

export class Produto {
    public id!: number;
    public descricao!: string;
    public disponivel!: boolean;
    public preco!: number;
    public foto!: string;
    public categoria!: Categoria; 
}

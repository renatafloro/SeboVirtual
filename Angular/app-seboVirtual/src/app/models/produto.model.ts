import { Categoria } from "./categoria.model";

export class Produto {
    public id!: number;
    public descricao!: string;
    public isDisponivel!: boolean;
    public preco!: number;
    public foto!: string;
    public categoria!: Categoria; 
}

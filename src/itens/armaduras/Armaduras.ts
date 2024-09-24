import Itens from "itens/Itens";
import ItensErro from "itens/ItensErro";

class Armaduras implements Itens{
    protected _nome : string;
    protected  _qtd : number;
    protected _defAdicional : number;

    constructor(nome : string, defAdicional : number){
        if(nome === null || nome === "")
            throw new ItensErro("O nome da poção não pode ser nulo ou vazio!");
        if(defAdicional < 0)
            throw new ItensErro("A defesa adicional de uma armadura não pode ser menor ou igual a 0.");
        this._nome = nome;
        this._qtd = 1;
        this._defAdicional = defAdicional;
    }

    acaoItem(jogador : JogadorBase): void {}

    get nome() : string{
        return this._nome;
    }

    get qtd() : number{
        return 1;
    }

    get defAdicional() : number{
        return this._defAdicional;
    }
}

export = Armaduras;
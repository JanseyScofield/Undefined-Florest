import Itens from "itens/Itens";
import ItensErro from "itens/ItensErro";
import JogadorBase from "entidades/jogador/JogadorBase";

class Armas implements Itens{
    protected _nome : string;
    protected _qtd : number;
    protected _atqAdicional : number;

    constructor(nome : string, atqAdicional : number){
        if(nome === null || nome === "")
            throw new ItensErro("O nome da poção não pode ser nulo ou vazio!");
        if(atqAdicional < 0)
            throw new ItensErro("O ataque adicional de uma arma não pode ser menor ou igual a 0.");
        this._nome = nome;
        this._qtd = 1;
        this._atqAdicional = atqAdicional;
    }

    acaoItem(jogador  : JogadorBase) : void{}

    get nome() : string{
        return this._nome;
    }

    get qtd() : number{
        return 1;
    }

    get atqAdicional() : number{
        return this._atqAdicional;
    }
}

export default Armas;
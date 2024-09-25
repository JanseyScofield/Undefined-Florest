import Itens from "../Itens";
import ItensErro from "../ItensErro";
import JogadorBase from "entidades/jogador/JogadorBase";

class Pocao implements Itens{
    protected _nome : string;
    protected _qtd : number;

    constructor(nome : string, qtd : number){
        if(nome === null || nome === "")
            throw new ItensErro("O nome da poção não pode ser nulo ou vazio!");
        if(qtd <= 0)
            throw new ItensErro("A quantidade de poções não pode ser menor ou igual a 0!");
        this._nome = nome;
        this._qtd = qtd;
    }

    acaoItem(jogador : JogadorBase): void {
        this._qtd -= 1;
    }

    get nome() : string{
        return this._nome;
    }
    
    get qtd() : number{
        return this._qtd;
    }

    set qtd(novaQtd : number){ 
        if(novaQtd < 0)
            throw new ItensErro("A quantidade de poções não pode ser menor ou igual a 0!");
        this._qtd = novaQtd;
    }
}

export default Pocao;
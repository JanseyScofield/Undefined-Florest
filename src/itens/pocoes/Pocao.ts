import Itens from "../Itens";
import ItensErro from "../ItensErro";

class Pocao implements Itens{
    protected _nome : string;
    protected _qtd : number;
    protected _tipo : string;

    constructor(nome : string, qtd : number, tipo :  string){
        if(nome === null || nome === "")
            throw new ItensErro("O nome da poção não pode ser nulo ou vazio!");
        if(qtd <= 0)
            throw new ItensErro("A quantidade de poções não pode ser menor ou igual a 0!");
        if(tipo === null || tipo === "")
            throw new ItensErro("O tipo da poção não pode ser nulo ou vazio!");
        this._nome = nome;
        this._qtd = qtd;
        this._tipo = tipo;
    }

    acaoItem(): void {}

    get nome() : string{
        return this._nome;
    }
    
    get qtd() : number{
        return this._qtd;
    }

    set qtd(novaQtd){ 
        if(novaQtd < 0)
            throw new ItensErro("A quantidade de poções não pode ser menor ou igual a 0!");
        this._qtd = novaQtd;
    }

    get tipo() : string{
        return this._tipo;
    }
}

exports = Pocao;
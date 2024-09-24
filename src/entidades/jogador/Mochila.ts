import Armas from "itens/armas/Armas";
import Itens from "itens/Itens";
import Pocao from "itens/pocoes/Pocao";
import PocaoForca from "itens/pocoes/variedades/PocaoForca";
import PocaoVelo from "itens/pocoes/variedades/PocaoVelo";
import PocaoVida from "itens/pocoes/variedades/PocaoVida";
import JogadorBase from "./JogadorBase";

class Mochila{
    private itens : Array<Itens>;

    constructor(arma : Armas){
        const pocoesVida : PocaoVida =  new PocaoVida(2)
        const pocoesForca : PocaoForca =  new PocaoForca(2);
        const pocoesVelo : PocaoVelo =  new PocaoVelo(2);
        const bagPadrao : Array<Itens> = [arma, pocoesVida, pocoesForca, pocoesVelo];
        this.itens = bagPadrao;
    }

    mostrarItens() : void{
        let iCont : number;
        for(iCont = 0; iCont < this.itens.length; iCont++)
            console.log(`${iCont + 1} - ${this.itens[iCont].nome} ${this.itens[iCont].qtd}x`)
    }

    adicionarItem(item : Itens) : void{
        if(item instanceof Pocao){
            let iCont  : number;
            for(iCont = 0; iCont < this.itens.length; iCont++)
                if(this.itens[iCont].nome === item.nome){
                    const qtdPocoes : number = item.qtd;
                    item.qtd = qtdPocoes + 1;
                    break;
                }
        }
        else
            this.itens.push(item);
    }

    removerItens(index : number) : void{
        if(index < 0 || index >= this.itens.length)
            throw new Error("O item não se encontra na mochila.");
        this.itens.splice(index - 1, 1);
    }

    usarItem(index :  number, jogador : JogadorBase) : void{
        if(index < 0 || index >= this.itens.length)
            throw new Error("O item não se encontra na mochila.");
        try{
            this.itens[index - 1].acaoItem(jogador);
        }
        catch(e){
            console.error("Erro ao usar o item: " + (e as Error).message);
        }
    }
}

export = Mochila;
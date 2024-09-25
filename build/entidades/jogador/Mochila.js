"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const Pocao_1 = __importDefault(require("itens/pocoes/Pocao"));
const PocaoForca_1 = __importDefault(require("itens/pocoes/variedades/PocaoForca"));
const PocaoVelo_1 = __importDefault(require("itens/pocoes/variedades/PocaoVelo"));
const PocaoVida_1 = __importDefault(require("itens/pocoes/variedades/PocaoVida"));
class Mochila {
    constructor(arma) {
        const pocoesVida = new PocaoVida_1.default(2);
        const pocoesForca = new PocaoForca_1.default(2);
        const pocoesVelo = new PocaoVelo_1.default(2);
        const bagPadrao = [arma, pocoesVida, pocoesForca, pocoesVelo];
        this.itens = bagPadrao;
    }
    mostrarItens() {
        let iCont;
        for (iCont = 0; iCont < this.itens.length; iCont++)
            console.log(`${iCont + 1} - ${this.itens[iCont].nome} ${this.itens[iCont].qtd}x`);
    }
    qtdItens() {
        return this.itens.length;
    }
    adicionarItem(item) {
        if (item instanceof Pocao_1.default) {
            let iCont;
            for (iCont = 0; iCont < this.itens.length; iCont++)
                if (this.itens[iCont].nome === item.nome) {
                    const qtdPocoes = item.qtd;
                    item.qtd = qtdPocoes + 1;
                    break;
                }
        }
        else
            this.itens.push(item);
    }
    removerItens(index) {
        if (index < 0 || index >= this.itens.length)
            throw new Error("O item não se encontra na mochila.");
        this.itens.splice(index, 1);
    }
    usarItem(index, jogador) {
        if (index < 0 || index >= this.itens.length)
            throw new Error("O item não se encontra na mochila.");
        try {
            const item = this.itens[index];
            if (item instanceof Pocao_1.default) {
                const novaQtd = item.qtd - 1;
                item.qtd = novaQtd;
                if (novaQtd === 0)
                    this.removerItens(index);
            }
            item.acaoItem(jogador);
        }
        catch (e) {
            console.error("Erro ao usar o item: " + e.message);
        }
    }
}
module.exports = Mochila;

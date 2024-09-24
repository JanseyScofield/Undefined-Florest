import Pocao from "../Pocao";
import JogadorBase = require("entidades/jogador/JogadorBase");

class PocaoForca extends Pocao{
    constructor(qtd : number){
        super("Poção de Força", qtd);
    }

    acaoItem(jogador: JogadorBase): void {
        jogador.alterAtqAtual(0.3);
    }
}

export = PocaoForca
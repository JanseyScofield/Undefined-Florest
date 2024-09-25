import Pocao from "../Pocao";
import JogadorBase = require("entidades/jogador/JogadorBase");

class PocaoVelo extends Pocao{
    constructor(qtd : number){
        super("Poção de Velocidade", qtd);
    }

    acaoItem(jogador: JogadorBase): void {
        jogador.alterarVeloAtual(0.3);
    }
}

export = PocaoVelo
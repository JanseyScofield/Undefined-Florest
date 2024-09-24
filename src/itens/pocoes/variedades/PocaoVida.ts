import Pocao from "../Pocao";
import JogadorBase = require("entidades/jogador/JogadorBase");

class PocaoVida extends Pocao{
    constructor(qtd : number){
        super("Poção de Vida", qtd);
    }

    acaoItem(jogador: JogadorBase): void {
        jogador.alterarVidaCombate(25);
    }
}

export = PocaoVida
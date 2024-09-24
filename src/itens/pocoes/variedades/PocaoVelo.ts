import Pocao from "../Pocao";

class PocaoVelo extends Pocao{
    constructor(qtd : number){
        super("Poção de Velocidade", qtd);
    }

    acaoItem(jogador: JogadorBase): void {
        jogador.alterVeloAtual(0.3);
    }
}

export = PocaoVelo
import Pocao from "../Pocao";
import JogadorBase from "entidades/jogador/JogadorBase";

class PocaoVelo extends Pocao{
    constructor(qtd : number){
        super("Poção de Velocidade", qtd);
    }

    acaoItem(jogador: JogadorBase): void {
        jogador.alterarVeloAtual(0.3);
        super.acaoItem(jogador);
    }
}

export default PocaoVelo
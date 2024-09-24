import JogadorBase from "entidades/jogador/JogadorBase";
import Armaduras from "../Armaduras";

class Elmo extends Armaduras{
    constructor(){
        super("Elmo", 0.2);
    }

    acaoItem(jogador: JogadorBase): void {
        jogador.alterarVidaAtual(0.2);
    }
}

export = Elmo
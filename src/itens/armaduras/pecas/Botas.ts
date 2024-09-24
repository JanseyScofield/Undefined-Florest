import Armaduras from "../Armaduras";

class Botas extends Armaduras{
    constructor(){
        super("Botas", 0.1);
    }

    acaoItem(jogador: JogadorBase): void {
        jogador.alterarVeloAtual(0.3);
    }
}

export = Botas
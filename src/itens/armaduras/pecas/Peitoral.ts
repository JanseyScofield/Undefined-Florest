import Armaduras from "../Armaduras";

class Peitoral extends Armaduras{
    constructor(){
        super("Peitoral", 0.5);
    }

    acaoItem(jogador: JogadorBase): void {
        jogador.alterarDefAtual(0.2);
    }
}
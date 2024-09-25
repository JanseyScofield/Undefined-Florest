
import JogadorBase from "entidades/jogador/JogadorBase";
import Inimigos from "../Inimigos";

class HomemPicareta extends Inimigos{
    constructor(etapa : number){
        super("Homem com Picareta", 0.4, 0.5, 0.3, 0.2, etapa, 5);
    }

    passiva(jogador : JogadorBase): void {
        jogador.alterarVidaAtual(-0.2);
        jogador.alterarVeloAtual(-0.2);
    }
}

export default HomemPicareta;
import JogadorBase from "entidades/jogador/JogadorBase";
import Inimigos from "../Inimigos";

class Boss extends Inimigos{
    constructor(){
        super("Garimpeiro", 3,3,3, 3, 4, 10);
    }

    passiva(jogador: JogadorBase): void {
        jogador.alterarAtqAtual(-0.4);
        jogador.alterarDefAtual(-0.4);
        jogador.alterarVeloAtual(-0.4);      
    }
}

export default Boss;
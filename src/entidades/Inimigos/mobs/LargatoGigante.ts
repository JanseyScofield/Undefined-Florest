
import JogadorBase from "entidades/jogador/JogadorBase";
import Inimigos from "../Inimigos";

class LargatoGigante extends Inimigos{
    constructor(etapa : number){
        super("Largato Gigante", 0.4, 0.2, 0.5, 0.3, etapa, 3);
    }

    passiva(jogador : JogadorBase): void {
        jogador.alterarAtqAtual(-0.2);
    }
}

export default LargatoGigante;
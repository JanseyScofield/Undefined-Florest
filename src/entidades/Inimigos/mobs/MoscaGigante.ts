import JogadorBase from "entidades/jogador/JogadorBase";
import Inimigos from "../Inimigos";

class MoscaGigante extends Inimigos{
    constructor(etapa : number){
        super("Mosca Gigante", 0.1, 0.3, 0.1, 0.5, etapa, 2);
    }

    passiva(jogador : JogadorBase): void {
        jogador.alterarDefAtual(-0.2);
    }
}

export default MoscaGigante;
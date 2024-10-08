import Armas from "../Armas";
import JogadorBase from "entidades/jogador/JogadorBase";

class EscudoFerro extends Armas{
    constructor(){
        super("Escudo de Ferro", 0.3);
    }

    acaoItem(jogador : JogadorBase) : void{
        jogador.alterarVidaAtual(0.1);
        jogador.alterarDefAtual(0.8);
        jogador.alterarVeloAtual(-0.2);
    }
}

export default EscudoFerro
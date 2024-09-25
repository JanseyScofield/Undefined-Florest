import Armas from "../Armas";
import JogadorBase from "entidades/jogador/JogadorBase";

class EscudoLendario extends Armas{
    constructor(){
        super("Escudo de Lendário", 0.5);
    }

    acaoItem(jogador : JogadorBase) : void{
        jogador.alterarVidaAtual(0.5);
        jogador.alterarAtqAtual(0.5);
        jogador.alterarDefAtual(1.2);
        jogador.alterarVeloAtual(0.1);
    }
}

export default EscudoLendario
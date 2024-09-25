import Armas from "../Armas";
import JogadorBase from "entidades/jogador/JogadorBase";

class EspadaLendaria extends Armas{
    constructor(){
        super("Espada Lendária", 1);
    }

    acaoItem(jogador : JogadorBase){
        jogador.alterarVidaAtual(0.2);
        jogador.alterarAtqAtual(0.8);
        jogador.alterarDefAtual(0.4);
        jogador.alterarVeloAtual(0.5);
    }
}

export default EspadaLendaria
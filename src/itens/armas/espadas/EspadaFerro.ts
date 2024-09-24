import Armas from "../Armas";

class EspadaFerro extends Armas{
    constructor(){
        super("Espada de Ferro", 0.6);
    }

    acaoItem(jogador : JogadorBase) : void{
        jogador.alterarVidaAtual(0.2);
        jogador.alterarAtqAtual(0.3);
    }
}

export = EspadaFerro
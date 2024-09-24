import Armas from "../Armas";

class EspadaLendaria extends Armas{
    constructor(){
        super("Espada Lendária", 1);
    }

    passiva(jogador : any){
        jogador.alterarVidaAtual(0.2);
        jogador.alterarAtqAtual(0.8);
        jogador.alterarDefAtual(0.4);
        jogador.alterarVeloAtual(0.5);
    }
}
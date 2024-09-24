import Armas from "../Armas";

class EspadaLendaria extends Armas{
    constructor(){
        super("Espada Lendária", 1);
    }

    passiva(jogador : any){
        jogador.alterarAtqAtual(0.8);
        jogador.alterarDefAtual(0.8);
        jogador.alterarVeloAtual(0.5);
    }
}
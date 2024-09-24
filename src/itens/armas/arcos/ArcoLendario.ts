import Armas from "../Armas";

class ArcoLendario extends Armas{
    constructor(){
        super("Arco Lendário", 1.2);
    }

    acaoItem(jogador : JogadorBase) : void{
        jogador.alterarAtqAtual(1);
        jogador.alterarDefAtual(0.2);
        jogador.alterarVeloAtual(0.5);
    }
}

export = ArcoLendario
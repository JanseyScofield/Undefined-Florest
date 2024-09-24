import Armas from "../Armas";

class EscudoLendario extends Armas{
    constructor(){
        super("Escudo de Lendário", 0.5);
    }

    passiva(jogador : any) : void{
        jogador.alterarVidaAtual(0.5);
        jogador.alterarAtqAtual(0.5);
        jogador.alterarDefAtual(1.2);
        jogador.alterarVeloAtual(0.1);
    }
}
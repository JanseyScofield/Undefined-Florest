import Armas from "../Armas";

class EscudoFerro extends Armas{
    constructor(){
        super("Escudo de Ferro", 0.3);
    }

    passiva(jogador : any) : void{
        jogador.alterarVidaAtual(0.1);
        jogador.alterarDefAtual(0.8);
        jogador.alterarVeloAtual(-0.2);
    }
}
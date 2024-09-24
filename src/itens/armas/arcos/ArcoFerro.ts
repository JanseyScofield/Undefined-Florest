import Armas from "../Armas";

class ArcoFerro extends Armas{
    constructor(){
        super("Arco de Ferro", 0.7);
    }

    passiva(jogador : any) : void{
        jogador.alterarAtqAtual(0.2);
        jogador.alterarVeloAtual(0.2);
    }
}
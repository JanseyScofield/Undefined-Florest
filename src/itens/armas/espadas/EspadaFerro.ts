import Armas from "../Armas";

class EspadaFerro extends Armas{
    constructor(){
        super("Espada de Ferro", 1, 0.5);
    }

    passiva(jogador : any) : void{
        jogador.alterarAtqAtual(0.3);
    }
}
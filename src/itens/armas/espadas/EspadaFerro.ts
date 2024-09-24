import Armas from "../Armas";

class EspadaFerro extends Armas{
    constructor(){
        super("Espada de Ferro", 0.5);
    }

    passiva(jogador : any) : void{
        jogador.alterarAtqAtual(0.3);
    }
}
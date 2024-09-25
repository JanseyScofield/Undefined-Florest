import Armas from "../Armas";
import JogadorBase from "entidades/jogador/JogadorBase";

class ArcoFerro extends Armas{
    constructor(){
        super("Arco de Ferro", 0.7);
    }

    acaoItem(jogador : JogadorBase) : void{
        jogador.alterarAtqAtual(0.2);
        jogador.alterarVeloAtual(0.2);
    }
}

export default ArcoFerro
import Pocao from "../Pocao";
import JogadorBase from "entidades/jogador/JogadorBase";

class PocaoForca extends Pocao{
    constructor(qtd : number){
        super("Poção de Força", qtd);
    }

    acaoItem(jogador: JogadorBase): void {
        jogador.alterarAtqAtual(0.3);
    }
}

export default PocaoForca
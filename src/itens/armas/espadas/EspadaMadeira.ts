import Armas from "../Armas";

class EspadaMadeira extends Armas{
    constructor(){
        super("Espada de Madeira", 1, 0.3);
    }

    passiva(jogador : any) : void{
        jogador.alterarVelAtual(0.2);
    }

}
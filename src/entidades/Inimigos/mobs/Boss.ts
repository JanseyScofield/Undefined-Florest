import JogadorBase from "entidades/jogador/JogadorBase";
import Inimigos from "../Inimigos";

class Boss extends Inimigos{
    constructor(){
        super("Garimpeiro", 3,3,3, 3, 4, 10);
    }

    passiva(jogador: JogadorBase): void {
        jogador.alterarVidaCombate(-10);
    }

    lancaChamas() : void{
        console.log("Tudo está pegando fogo!");
    }
}

export default Boss;
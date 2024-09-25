import EscudoFerro from "itens/armas/escudos/EscudoFerro";
import JogadorBase from "../JogadorBase";

class Paladino extends JogadorBase{
    constructor(nome : string){
        const arcoFerrro : EscudoFerro = new EscudoFerro();
        super(nome, 1.2, 0.8, 1.2, 0.7, arcoFerrro);
    }
}

export default Paladino;
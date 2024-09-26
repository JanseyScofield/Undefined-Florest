import EspadaFerro from "itens/armas/espadas/EspadaFerro";
import JogadorBase from "../JogadorBase";

class Guerreiro extends JogadorBase{
    constructor(nome : string){
        const espadaFerro : EspadaFerro = new EspadaFerro();
        super(nome, 1, 1, 1, 1, espadaFerro);
    }
}

export default Guerreiro;
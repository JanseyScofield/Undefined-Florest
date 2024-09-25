import ArcoFerro from "itens/armas/arcos/ArcoFerro";
import JogadorBase from "../JogadorBase";

class Arqueiro extends JogadorBase{
    constructor(nome : string){
        const arcoFerrro : ArcoFerro = new ArcoFerro();
        super(nome, 0.8, 1.2, 0.7, 1.2, arcoFerrro);
    }
}

export default Arqueiro;

import Entidades from "entidades/Entidades";
import Inimigos from "entidades/Inimigos/Inimigos";
import JogadorBase from "entidades/jogador/JogadorBase";

class Combate{
    private _jogador : JogadorBase;
    private _inimigo : Inimigos;
    private _rodadas : number;

    constructor(jogador : JogadorBase, inimigo : Inimigos){
        this._jogador = jogador;
        this._inimigo = inimigo;
        this._rodadas = 1;
    }

    interacoes() : void{
        const primeiro : Entidades = this._jogador.velocidadeAtual > this._inimigo.velocidadeAtual? this._jogador : this._inimigo;
        while(this._jogador.vidaAtual > 0 || ) 
    }

}

export default Combate;
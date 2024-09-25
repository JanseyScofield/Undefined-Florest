import Entidades from "entidades/Entidades";
import JogadorBase from "entidades/jogador/JogadorBase";

class Inimigos extends Entidades{
    protected _xpVitoria : number;

    constructor(nome : string, modfVida : number, modfAtq : number, modfDef : number, modfVelocidade : number, etapa : number, xpBase : number){
        super(nome, modfVida, modfAtq, modfDef, modfVelocidade, etapa);
        this._xpVitoria = xpBase * etapa;
    }

    get xpVitoria() : number{
        return this._xpVitoria;
    }

    passiva(jogador : JogadorBase) : void{};
}

export default Inimigos;
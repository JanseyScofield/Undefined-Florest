import Entidades from "entidades/Entidades";
import Armas from "itens/armas/Armas";
import Mochila from "./Mochila";


class JogadorBase extends Entidades{
    protected _xpProxLevel : number;
    protected _xpAtual :  number;
    protected _mochila : Mochila;

    constructor(nome : string, modfVida : number, modfAtq : number, modfDef : number, modfVelocidade : number, arma : Armas){
        super(nome, modfVida, modfAtq,modfDef,modfVelocidade, 1);
        this._xpAtual = 0;
        this._xpProxLevel = 10;
        this._mochila = new Mochila(arma);
    }

    mostrarStatus() : void{
        console.log(`${this._nome}\nLevel: ${this._level}\nVida: ${this._vidaAtual}\nAtaque: ${this._atqAtual}\nDefesa: ${this._defAtual}\nVelocidade: ${this._velAtual}\nExp: ${this._xpAtual}/${this._xpProxLevel}`);
    }

    get xpAtual() : number{
        return this._xpAtual;
    }

    get xpProxLevel() : number{
        return this._xpProxLevel;
    }

    ganharXp(xpAdd : number) : void{
        if(xpAdd  <= 0)
            throw new Error("O xp adicional não pode ser menor ou igual a 0.");
        this._xpAtual += xpAdd;
        while(this._xpProxLevel <= this._xpAtual)
            this.subirNivel();
    }    

    subirNivel() : void{
        console.log("Level Up!");
        this.mostrarStatus();
        console.log("-->");
        this._level ++;
        this._vidaBase += this._vidaBase * this._level * 0.4;
        this._atqBase += this._atqBase * this._level * 0.4;
        this._defBase += this._defBase * this._level * 0.4;
        this._velBase += this._velAtual * this._level * 0.4;
        this.mostrarStatus();
        this._xpAtual -= this._xpProxLevel;
        this._xpProxLevel *= 0.75;
    }

}

export = JogadorBase;
import Entidades from "entidades/Entidades";
import Armas from "itens/armas/Armas";
import Mochila from "./Mochila";
import JogadorErro from "./JogadorErro";


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

    comecarCombate() : void{
        this._vidaAtual = this._vidaBase;
        this._atqAtual = this._atqBase;
        this._defAtual = this._defBase;
        this._velAtual = this._velBase;
        this._mochila.usarItem(0, this);
        this._vidaCombate = this._vidaAtual;
    }

    ganharXp(xpAdd : number) : void{
        if(xpAdd  <= 0)
            throw new JogadorErro("O xp adicional não pode ser menor ou igual a 0.");
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

    alterarVidaAtual(modificador: number) : void{
        if(modificador === 0)
            throw new JogadorErro("O modificador de vida não pode ser igual a 0.");
        this._vidaAtual * modificador;
    }

    alterarVidaCombate(modificador: number) : void{
        if(modificador === 0)
            throw new JogadorErro("O modificador de vida não pode ser igual a 0.");
        this._vidaCombate + modificador;
    }

    alterarAtqAtual(modificador: number) : void{
        if(modificador === 0)
            throw new JogadorErro("O modificador de ataque não pode ser igual a 0.");
        this._atqAtual * modificador;
    }

    alterarDefAtual(modificador: number) : void{
        if(modificador === 0)
            throw new JogadorErro("O modificador de defesa não pode ser igual a 0.");
        this._defAtual * modificador;
    }

    alterarVeloAtual(modificador: number) : void{
        if(modificador === 0)
            throw new JogadorErro("O modificador de velocidade não pode ser igual a 0.");
        this._velAtual * modificador;
    }

}

export default JogadorBase;
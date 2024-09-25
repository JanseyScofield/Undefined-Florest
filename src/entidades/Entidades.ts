import EntidadeErro from "./EntidadeErro";

class Entidades{
    protected _nome : string;
    protected _vidaBase : number;
    protected _vidaCombate  :  number;
    protected _vidaAtual : number;
    protected _atqBase :  number;
    protected _atqAtual :  number;
    protected _defBase : number;
    protected _defAtual :  number;
    protected _velBase : number;
    protected _velAtual :  number;
    protected _level : number;

    constructor(nome : string, modfVida : number, modfAtq : number, modfDef : number, modfVelocidade : number, level : number){
        if(nome === null || nome === "")
            throw new EntidadeErro("O nome da entidade não pode ser nulo ou vazio!");
        if(modfVida <= 0)
            throw new EntidadeErro("O modificador de vida não pode ser menor ou igual a 0");
        if(modfAtq <= 0)
            throw new EntidadeErro("O modificador de ataque não pode ser menor ou igual a 0");
        if(modfDef <= 0)
            throw new EntidadeErro("O modificador de defesa não pode ser menor ou igual a 0");
        if(modfVelocidade <= 0)
            throw new EntidadeErro("O modificador de velocidade não pode ser menor ou igual a 0");
        if(level <= 0)
            throw new EntidadeErro("O nivel da entidade não pode ser menor ou igual a 0");           

        this._nome = nome;
        this._vidaBase = 30 * modfVida * level;
        this._vidaCombate = this._vidaBase;
        this._vidaAtual = this._vidaBase;
        this._atqBase = 5 * modfAtq * level;
        this._atqAtual = this._atqBase;
        this._defBase = 5 * modfDef * level;
        this._defAtual = this._defBase;
        this._velBase = 5 * modfVelocidade * level;
        this._velAtual = this._velBase;
        this._level = level;
    }

    get nome() : string{
        return this._nome;
    }

    get vidaBase() :  number{
        return this._vidaBase;
    }
    
    get vidaAtual() :  number{
        return this._vidaAtual;
    }

    get atqAtual() : number{
        return this._atqAtual;
    }

    get velocidadeAtual() : number{
        return this._velAtual;
    }

    receberDano(atqAdv : number) : number{
        const modificador = Math.random();
        const dano = (atqAdv * modificador) - this._defAtual;
        this._vidaCombate -=  dano;
        return dano;
    }

}

export default Entidades;
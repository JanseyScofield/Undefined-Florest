class JogadorBase{
    private #nome : String;
    private #vidaBase : number;
    private #vidaAtual : number;
    private #atqBase :  number;
    private #atqAtual :  number;
    private #defBase : number;
    private #defAtual :  number;
    private #velBase : number;
    private velAtual :  number;
    private #xpProxLevel : number;
    private #xpAtual :  number;
    private #skillsList : {[skill : string] : number};
    private #bag : {[item : string] : any};

    constructor(nome : String, modfVida : number, modfAtq : number, modfDef : number, modfVelocidade : number,modfEvasiva : number, skillList : {[skill : string] : number}){
        this.#nome = nome;
        this.#vidaBase = 100 * modfVida;
        this.#vidaAtual = this.#vidaTotal;
        this.#atq = 20 * modfAtq;
        this.#def = 20 * modfDef;
        this.#velocidade = 20 * modfVelocidade;
        this.#xp = 0;
        this.#skillsList  = skillList;
        this.#bag = {}
    }

}
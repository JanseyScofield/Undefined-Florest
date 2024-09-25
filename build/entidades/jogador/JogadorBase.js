"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const Entidades_1 = __importDefault(require("entidades/Entidades"));
const Mochila_1 = __importDefault(require("./Mochila"));
const JogadorErro_1 = __importDefault(require("./JogadorErro"));
class JogadorBase extends Entidades_1.default {
    constructor(nome, modfVida, modfAtq, modfDef, modfVelocidade, arma) {
        super(nome, modfVida, modfAtq, modfDef, modfVelocidade, 1);
        this._xpAtual = 0;
        this._xpProxLevel = 10;
        this._mochila = new Mochila_1.default(arma);
    }
    mostrarStatus() {
        console.log(`${this._nome}\nLevel: ${this._level}\nVida: ${this._vidaAtual}\nAtaque: ${this._atqAtual}\nDefesa: ${this._defAtual}\nVelocidade: ${this._velAtual}\nExp: ${this._xpAtual}/${this._xpProxLevel}`);
    }
    get xpAtual() {
        return this._xpAtual;
    }
    get xpProxLevel() {
        return this._xpProxLevel;
    }
    comecarCombate() {
        this._vidaAtual = this._vidaBase;
        this._atqAtual = this._atqBase;
        this._defAtual = this._defBase;
        this._velAtual = this._velBase;
        this._mochila.usarItem(0, this);
        this._vidaCombate = this._vidaAtual;
    }
    ganharXp(xpAdd) {
        if (xpAdd <= 0)
            throw new JogadorErro_1.default("O xp adicional não pode ser menor ou igual a 0.");
        this._xpAtual += xpAdd;
        while (this._xpProxLevel <= this._xpAtual)
            this.subirNivel();
    }
    subirNivel() {
        console.log("Level Up!");
        this.mostrarStatus();
        console.log("-->");
        this._level++;
        this._vidaBase += this._vidaBase * this._level * 0.4;
        this._atqBase += this._atqBase * this._level * 0.4;
        this._defBase += this._defBase * this._level * 0.4;
        this._velBase += this._velAtual * this._level * 0.4;
        this.mostrarStatus();
        this._xpAtual -= this._xpProxLevel;
        this._xpProxLevel *= 0.75;
    }
    alterarVidaAtual(modificador) {
        if (modificador === 0)
            throw new JogadorErro_1.default("O modificador de vida não pode ser igual a 0.");
        this._vidaAtual * modificador;
    }
    alterarVidaCombate(modificador) {
        if (modificador === 0)
            throw new JogadorErro_1.default("O modificador de vida de combate não pode ser igual a 0.");
        this._vidaCombate + modificador;
    }
    alterarAtqAtual(modificador) {
        if (modificador === 0)
            throw new JogadorErro_1.default("O modificador de ataque não pode ser igual a 0.");
        this._atqAtual * modificador;
    }
    alterarDefAtual(modificador) {
        if (modificador === 0)
            throw new JogadorErro_1.default("O modificador de defesa não pode ser igual a 0.");
        this._defAtual * modificador;
    }
    alterarVeloAtual(modificador) {
        if (modificador === 0)
            throw new JogadorErro_1.default("O modificador de velocidade não pode ser igual a 0.");
        this._velAtual * modificador;
    }
}
module.exports = JogadorBase;

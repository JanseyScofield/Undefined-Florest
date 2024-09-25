"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const EntidadeErro_1 = __importDefault(require("./EntidadeErro"));
class Entidades {
    constructor(nome, modfVida, modfAtq, modfDef, modfVelocidade, level) {
        if (nome === null || nome === "")
            throw new EntidadeErro_1.default("O nome da entidade não pode ser nulo ou vazio!");
        if (modfVida <= 0)
            throw new EntidadeErro_1.default("O modificador de vida não pode ser menor ou igual a 0");
        if (modfAtq <= 0)
            throw new EntidadeErro_1.default("O modificador de ataque não pode ser menor ou igual a 0");
        if (modfDef <= 0)
            throw new EntidadeErro_1.default("O modificador de defesa não pode ser menor ou igual a 0");
        if (modfVelocidade <= 0)
            throw new EntidadeErro_1.default("O modificador de velocidade não pode ser menor ou igual a 0");
        if (level <= 0)
            throw new EntidadeErro_1.default("O nivel da entidade não pode ser menor ou igual a 0");
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
    get nome() {
        return this._nome;
    }
    get vidaBase() {
        return this._vidaBase;
    }
    get vidaAtual() {
        return this._vidaAtual;
    }
    get atqAtual() {
        return this._atqAtual;
    }
    get velocidadeAtual() {
        return this._velAtual;
    }
    receberDano(atqAdv) {
        const modificador = Math.random();
        const dano = (atqAdv * modificador) - this._defAtual;
        this._vidaCombate -= dano;
        return dano;
    }
}
module.exports = Entidades;

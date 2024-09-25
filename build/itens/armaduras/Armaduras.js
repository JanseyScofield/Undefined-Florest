"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const ItensErro_1 = __importDefault(require("itens/ItensErro"));
class Armaduras {
    constructor(nome, defAdicional) {
        if (nome === null || nome === "")
            throw new ItensErro_1.default("O nome da poção não pode ser nulo ou vazio!");
        if (defAdicional < 0)
            throw new ItensErro_1.default("A defesa adicional de uma armadura não pode ser menor ou igual a 0.");
        this._nome = nome;
        this._qtd = 1;
        this._defAdicional = defAdicional;
    }
    acaoItem(jogador) { }
    get nome() {
        return this._nome;
    }
    get qtd() {
        return 1;
    }
    get defAdicional() {
        return this._defAdicional;
    }
}
module.exports = Armaduras;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const ItensErro_1 = __importDefault(require("../ItensErro"));
class Pocao {
    constructor(nome, qtd) {
        if (nome === null || nome === "")
            throw new ItensErro_1.default("O nome da poção não pode ser nulo ou vazio!");
        if (qtd <= 0)
            throw new ItensErro_1.default("A quantidade de poções não pode ser menor ou igual a 0!");
        this._nome = nome;
        this._qtd = qtd;
    }
    acaoItem(jogador) { }
    get nome() {
        return this._nome;
    }
    get qtd() {
        return this._qtd;
    }
    set qtd(novaQtd) {
        if (novaQtd < 0)
            throw new ItensErro_1.default("A quantidade de poções não pode ser menor ou igual a 0!");
        this._qtd = novaQtd;
    }
}
module.exports = Pocao;

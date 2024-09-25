"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const ItensErro_1 = __importDefault(require("itens/ItensErro"));
class Armas {
    constructor(nome, atqAdicional) {
        if (nome === null || nome === "")
            throw new ItensErro_1.default("O nome da poção não pode ser nulo ou vazio!");
        if (atqAdicional < 0)
            throw new ItensErro_1.default("O ataque adicional de uma arma não pode ser menor ou igual a 0.");
        this._nome = nome;
        this._qtd = 1;
        this._atqAdicional = atqAdicional;
    }
    acaoItem(jogador) { }
    get nome() {
        return this._nome;
    }
    get qtd() {
        return 1;
    }
    get atqAdicional() {
        return this._atqAdicional;
    }
}
module.exports = Armas;

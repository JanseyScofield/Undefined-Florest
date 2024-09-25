"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const Pocao_1 = __importDefault(require("../Pocao"));
class PocaoVelo extends Pocao_1.default {
    constructor(qtd) {
        super("Poção de Velocidade", qtd);
    }
    acaoItem(jogador) {
        jogador.alterarVeloAtual(0.3);
    }
}
module.exports = PocaoVelo;

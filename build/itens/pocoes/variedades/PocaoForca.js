"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const Pocao_1 = __importDefault(require("../Pocao"));
class PocaoForca extends Pocao_1.default {
    constructor(qtd) {
        super("Poção de Força", qtd);
    }
    acaoItem(jogador) {
        jogador.alterarAtqAtual(0.3);
    }
}
module.exports = PocaoForca;

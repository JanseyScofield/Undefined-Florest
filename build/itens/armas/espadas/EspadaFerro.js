"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const Armas_1 = __importDefault(require("../Armas"));
class EspadaFerro extends Armas_1.default {
    constructor() {
        super("Espada de Ferro", 0.6);
    }
    acaoItem(jogador) {
        jogador.alterarVidaAtual(0.2);
        jogador.alterarAtqAtual(0.3);
    }
}
module.exports = EspadaFerro;

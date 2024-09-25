"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const Armas_1 = __importDefault(require("../Armas"));
class ArcoFerro extends Armas_1.default {
    constructor() {
        super("Arco de Ferro", 0.7);
    }
    acaoItem(jogador) {
        jogador.alterarAtqAtual(0.2);
        jogador.alterarVeloAtual(0.2);
    }
}
module.exports = ArcoFerro;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const Armas_1 = __importDefault(require("../Armas"));
class EscudoFerro extends Armas_1.default {
    constructor() {
        super("Escudo de Ferro", 0.3);
    }
    acaoItem(jogador) {
        jogador.alterarVidaAtual(0.1);
        jogador.alterarDefAtual(0.8);
        jogador.alterarVeloAtual(-0.2);
    }
}
module.exports = EscudoFerro;

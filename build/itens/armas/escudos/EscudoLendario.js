"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const Armas_1 = __importDefault(require("../Armas"));
class EscudoLendario extends Armas_1.default {
    constructor() {
        super("Escudo de Lendário", 0.5);
    }
    acaoItem(jogador) {
        jogador.alterarVidaAtual(0.5);
        jogador.alterarAtqAtual(0.5);
        jogador.alterarDefAtual(1.2);
        jogador.alterarVeloAtual(0.1);
    }
}
module.exports = EscudoLendario;

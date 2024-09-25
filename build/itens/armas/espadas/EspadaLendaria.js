"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const Armas_1 = __importDefault(require("../Armas"));
class EspadaLendaria extends Armas_1.default {
    constructor() {
        super("Espada Lendária", 1);
    }
    acaoItem(jogador) {
        jogador.alterarVidaAtual(0.2);
        jogador.alterarAtqAtual(0.8);
        jogador.alterarDefAtual(0.4);
        jogador.alterarVeloAtual(0.5);
    }
}
module.exports = EspadaLendaria;

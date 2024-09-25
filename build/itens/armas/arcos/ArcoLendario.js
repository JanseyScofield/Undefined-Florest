"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const Armas_1 = __importDefault(require("../Armas"));
class ArcoLendario extends Armas_1.default {
    constructor() {
        super("Arco Lendário", 1.2);
    }
    acaoItem(jogador) {
        jogador.alterarAtqAtual(1);
        jogador.alterarDefAtual(0.2);
        jogador.alterarVeloAtual(0.5);
    }
}
module.exports = ArcoLendario;

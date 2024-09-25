"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const Pocao_1 = __importDefault(require("../Pocao"));
class PocaoVida extends Pocao_1.default {
    constructor(qtd) {
        super("Poção de Vida", qtd);
    }
    acaoItem(jogador) {
        jogador.alterarVidaCombate(25);
    }
}
module.exports = PocaoVida;

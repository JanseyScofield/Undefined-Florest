"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const Armaduras_1 = __importDefault(require("../Armaduras"));
class Botas extends Armaduras_1.default {
    constructor() {
        super("Botas", 0.1);
    }
    acaoItem(jogador) {
        jogador.alterarVeloAtual(0.3);
    }
}
module.exports = Botas;

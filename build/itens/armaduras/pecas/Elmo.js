"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const Armaduras_1 = __importDefault(require("../Armaduras"));
class Elmo extends Armaduras_1.default {
    constructor() {
        super("Elmo", 0.2);
    }
    acaoItem(jogador) {
        jogador.alterarVidaAtual(0.2);
    }
}
module.exports = Elmo;

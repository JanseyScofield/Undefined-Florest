"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const Armaduras_1 = __importDefault(require("../Armaduras"));
class Peitoral extends Armaduras_1.default {
    constructor() {
        super("Peitoral", 0.5);
    }
    acaoItem(jogador) {
        jogador.alterarDefAtual(0.2);
    }
}
module.exports = Peitoral;

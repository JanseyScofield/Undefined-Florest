"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JogadorBase_1 = __importDefault(require("entidades/jogador/JogadorBase"));
const EspadaFerro_1 = __importDefault(require("itens/armas/espadas/EspadaFerro"));
const espadaFerro = new EspadaFerro_1.default();
const novoJogador = new JogadorBase_1.default("Jansey", 1.2, 1.2, 1.2, 1.2, espadaFerro);
novoJogador.mostrarStatus();

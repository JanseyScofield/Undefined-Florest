const JogadorBase = require('entidades/jogador/JogadorBase');
import EspadaFerro from "itens/armas/espadas/EspadaFerro";
const espadaFerro = new EspadaFerro();

const novoJogador = new JogadorBase("Jansey", 1.2, 1.2, 1.2,1.2,espadaFerro)

novoJogador.mostrarStatus()
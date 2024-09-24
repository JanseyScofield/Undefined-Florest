import JogadorBase = require("entidades/jogador/JogadorBase");

interface Itens{
    nome : string;
    qtd : number;

    acaoItem(jogador : JogadorBase) : void;
}

export = Itens;
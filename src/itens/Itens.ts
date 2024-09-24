interface Itens{
    nome : string;
    qtd : number;

    acaoItem(jogador : JogadorBase) : void;
}

export = Itens;
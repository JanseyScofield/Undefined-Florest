import JogadorBase from "entidades/jogador/JogadorBase";

interface Itens{
    nome : string;
    qtd : number;

    acaoItem(jogador : JogadorBase) : void;
}

export default Itens;
import Entidades from "entidades/Entidades";
import Inimigos from "entidades/Inimigos/Inimigos";
import JogadorBase from "entidades/jogador/JogadorBase";
import readline from "readline-sync";

class Combate{
    private _jogador : JogadorBase;
    private _inimigo : Inimigos;

    constructor(jogador : JogadorBase, inimigo : Inimigos){
        this._jogador = jogador;
        this._inimigo = inimigo;
    }

    interacoes() : boolean{
        let fimCombate : boolean = false;
        let vitoria : boolean;
        this._jogador.comecarCombate();
        this._inimigo.passiva(this._jogador)

        while(true){
            const opcao : string = readline.question("O que deseja fazer?\n1 - Atacar\n2 - Bolsa\n");
            if(opcao === "1"){
                if(this._jogador.velocidadeAtual >= this._inimigo.velocidadeAtual)
                    fimCombate = this.atacar(this._jogador, this._inimigo);
                else
                    fimCombate = this.atacar(this._inimigo, this._jogador);
            }
            else if(opcao === "2"){
                this._jogador.acessarMochila();
                this._jogador.receberDano(this._inimigo.atqAtual);
                fimCombate = this._jogador.vidaCombate === 0;
            }
            else
                console.log("Opção invalida!");


            if(fimCombate && this._jogador.vidaCombate > 0){
                console.log("Vitória!");
                this._jogador.ganharXp(this._inimigo.xpVitoria);
                vitoria = true;
                break;
            }
            else if(fimCombate && this._jogador.vidaCombate <= 0){
                console.log("Derrota! Você morreu! Fim do jogo!");
                vitoria = false;
                break;
            }
        } 

        return vitoria;
    }

    private atacar(primeiro : Entidades, segundo : Entidades) : boolean{
        segundo.receberDano(primeiro.atqAtual);
        if(segundo.vidaCombate <= 0)
            return true;
        primeiro.receberDano(segundo.atqAtual)
        if(primeiro.vidaCombate <= 0)
            return true;
        return false;
    }

}

export default Combate;
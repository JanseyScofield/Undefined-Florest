import MoscaGigante from "entidades/Inimigos/mobs/MoscaGigante";
import Arqueiro from "entidades/jogador/classes/Arqueiro";
import Guerreiro from "entidades/jogador/classes/Guerreiro";
import Paladino from "entidades/jogador/classes/Paladino";
import JogadorBase from "entidades/jogador/JogadorBase";
import readline from "readline-sync";
import Combate from "./Combate";
import { read } from "fs";
import Itens from "itens/Itens";
import PocaoVida from "itens/pocoes/variedades/PocaoVida";
import PocaoForca from "itens/pocoes/variedades/PocaoForca";
import Elmo from "itens/armaduras/pecas/Elmo";
import LargatoGigante from "entidades/Inimigos/mobs/LargatoGigante";
import Botas from "itens/armaduras/pecas/Botas";

class UndefinedFlorest{
    private _jogador : JogadorBase;
    private _vivo : boolean =  true;
    private _lore : string = `Você é servo do rei da cidade de Ainozama, vilarejo arrodeado de mata e rios. De repente, os moradores do local passam a sofrer ataques de criaturas desconhecidas e uma grande seca regional. Afim de descobrir possiveis causas para esses problemas, o rei lhe envia em uma missão extremamente desafiadora e arriscada, investigar a única floresta  totalmente inexplorada pela comunidade. Agora...Se cuide! Você tem apenas uma chance! Caso morra, terá voltar do zero! Seu objetivo é conseguir respostas, e claro, sobreviver a toda essa aventura!`;

    play() : void{
        while(true){
            this.inicio();
            if(!this.primeitaEtapa()){
                this.perderJogo();
                break;
            }
            if(!this.segundaEtapa()){
                this.perderJogo();
                break;
            }

        }
    }

    private perderJogo() : void{
        console.log("Você morreu! Lamento... Começe tudo novamente... Tenho certeza que aprendeu algo com a experiência.");
        this._vivo = true;
    }

    private inicio() : void{
        console.log("Olá! Tudo bem? Entre, entre! Me chamo Jansey e aqui é Undefined Florest!!");
        console.log(this._lore);
        const nome : string = readline.question("Qual o seu nome? ");
        console.log("Qual classe deseja ser? Todas as classes começarão com 6 poções e uma arma especial!");
        while(true){
            const classe : string = readline.question("1 - Guerreiro : Uma classe com atributos bem equilibrados, perfeito pra quem quer ser um pouco de tudo. Começa com uma espada.\n2 - Arqueiro : Uma classe com muito dano e velocidade, mas frágil, perfeito para quem quer ser letal. Começa com um arco.\n3 - Paladino : Uma classe bem resistente, mas com menos atque e velocidade. Perfeito para quem gosta de aguentar porrada.\n");

            if(classe ===  "1"){
                this._jogador = new Guerreiro(nome);
                break;
            }
            else if(classe === "2"){
                this._jogador = new Arqueiro(nome);
                break;
            }
            else if(classe === "3"){
                this._jogador = new Paladino(nome);
                break;
            }
            else
                console.log("Opção inválida.");
        }
    }

    private primeitaEtapa() : boolean{
        console.log("Vamos andar pela floresta!Que monstro é esse ?! Lute com ela para se defender!");
        const moscaGg1 : MoscaGigante = new MoscaGigante(3);
        const combate1 : Combate = new Combate(this._jogador,  moscaGg1);
        this._vivo = combate1.interacoes();
        if(!this._vivo)
            return false;
        console.log("Ufa! Você conseguiu derrota-la! Continue assim! Não vai ser nem um pouco tranquilo! A cada etapa que passar, você  tem dois caminhos a seguir: avançar ou explorar um pouco a floresta para ganhar itens e experiência antes. O que deseja fazer agora?");
        this.interfaceEtapas(1);
        return this._vivo;        
    }

    private segundaEtapa() : boolean{
        const largatoGg1 : LargatoGigante = new LargatoGigante(5);
        const combate2 : Combate = new Combate(this._jogador, largatoGg1);

        console.log("A fonte do rio está seca! Tem muitas pedras empatando que o fluxo de água correr. Você deve retira-las imediatamente!");
        console.log("Oh não! O que é aquilo? Lute contra ele!!");
        this._vivo = combate2.interacoes();
        if(!this._vivo)
            return false;
        console.log("Boa! Conseguiu derrotar aquele monstro e tirar todas as pedras da fonte! Com certeza resolver o problema da seca. Mas agora... de onde vem todas essas aberrações?");
        this.interfaceEtapas(2);
        return this._vivo;   
    }

    private interfaceEtapas(etapa : number) : void{
        while(true){
            const escolha : string = readline.question("1 - Avançar\n2 - Explorar\n3 - Ver status\n4 - Ver mochila\n");
            if(escolha === "1")
                break;
            else if(escolha === "2"){
                this.chamarFarm(etapa);
                break;
            }
            else if(escolha === "3")
                this._jogador.mostrarStatus();
            else if(escolha === "4")
                this._jogador.acessarMochila();
            else
                console.log("Opção inválida.");
        }
    }

    private chamarFarm(etapa : number) : void{
        switch(etapa){
            case 1:
                this._vivo = this.farmPrimeiraEtapa();
                break;
            case 2:
                this._vivo = this.farmSegundaEtapa()    
            default:
                throw new Error("Não existe uma etapa com esse valor. Acrescente-a caso queira usa-la.");
        }
    }

    private combatesFarm(listaCombate : Array<Combate>, listaItens : Array<Itens>) : void{
        for(let iCont = 0; iCont < listaCombate.length && this._vivo; iCont++){
            this._vivo = listaCombate[iCont].interacoes();
            if(this._vivo){
                console.log(`Você recebeu ${listaItens[iCont].nome}!`);
                this._jogador.adicionarItem(listaItens[iCont]);
            }
        }   
    }

    private farmPrimeiraEtapa() : boolean{
        const moscaGg1 : MoscaGigante = new MoscaGigante(3);
        const combate1 : Combate = new Combate(this._jogador, moscaGg1);
        const moscaGg2 : MoscaGigante = new MoscaGigante(3);
        const combate2 : Combate = new Combate(this._jogador, moscaGg2);
        const moscaGg3 : MoscaGigante = new MoscaGigante(3);
        const combate3 : Combate = new Combate(this._jogador, moscaGg3);
        const listaCombate : Array<Combate> = [combate1, combate2, combate3];

        const pocaoVida : PocaoVida = new PocaoVida(1);
        const pocaoForca : PocaoForca = new PocaoForca(1);
        const elmo : Elmo = new Elmo();
        const listaItens : Array<Itens> =  [pocaoVida, pocaoForca, elmo];

        console.log("Essa parte da floresta é infestada de moscas!");
        this.combatesFarm(listaCombate, listaItens);

        return this._vivo;
    }

   private farmSegundaEtapa() : boolean{
        const moscaGg1 : MoscaGigante = new MoscaGigante(5);
        const combate1 : Combate = new Combate(this._jogador, moscaGg1);
        const moscaGg2 : MoscaGigante = new MoscaGigante(5);
        const combate2 : Combate = new Combate(this._jogador, moscaGg2);
        const largatoGg1 : LargatoGigante = new LargatoGigante(5);
        const combate3 : Combate = new Combate(this._jogador, largatoGg1);
        const listaCombate : Array<Combate> = [combate1, combate2, combate3];

        const pocaoVida : PocaoVida = new PocaoVida(1);
        const pocaoForca : PocaoForca = new PocaoForca(1);
        const botas : Botas = new Botas();
        const listaItens : Array<Itens> =  [pocaoVida, pocaoForca, botas];

        let iCont : number;
        console.log("Muitos monstros aparecem por aqui!");
        this.combatesFarm(listaCombate, listaItens); 

        return this._vivo;
   } 
}

export default UndefinedFlorest;
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
import HomemPicareta from "entidades/Inimigos/mobs/HomemPicareta";
import PocaoVelo from "itens/pocoes/variedades/PocaoVelo";
import Peitoral from "itens/armaduras/pecas/Peitoral";
import Boss from "entidades/Inimigos/mobs/Boss";
import EspadaLendaria from "itens/armas/espadas/EspadaLendaria";
import ArcoLendario from "itens/armas/arcos/ArcoLendario";
import EscudoFerro from "itens/armas/escudos/EscudoFerro";
import EscudoLendario from "itens/armas/escudos/EscudoLendario";

class UndefinedFlorest{
    private _jogador : JogadorBase;
    private _vivo : boolean =  true;
    private _lore : string = `Você é servo do rei da cidade de Ainozama, vilarejo arrodeado de mata e rios. De repente, os moradores do local passam a sofrer ataques de criaturas desconhecidas e uma grande seca regional. Afim de descobrir possiveis causas para esses problemas, o rei lhe envia em uma missão extremamente desafiadora e arriscada, investigar a única floresta  totalmente inexplorada pela comunidade. Agora...Se cuide! Você tem apenas uma chance! Caso morra, terá que voltar do zero! Seu objetivo é conseguir respostas, e claro, sobreviver a toda essa aventura!`;

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
            if(!this.terceiraEtapa()){
                this.perderJogo();
                break;
            }
            if(!this.final()){
                this.perderJogo();
                break;
            }
            else{
                console.log("- Garimpeiro : Acham que acabou? HAHAHA ERRADO! Se eu não vou conseguir o que eu quero, vocês também não vão!! ");
                console.log("- Garimpeiro : Ainda tenho uma carta na manga! *Mostra corpo arrodeado de dinamite*")
                console.log("- Jansey : PARAAAA!!");
                console.log(".......................");
                console.log(`A floresta Amazônica, majestosa e vibrante, sofre em silêncio. Suas árvores imponentes, que abrigam incontáveis formas de vida, são derrubadas, e o chão, uma vez coberto por folhas e raízes, agora se torna um deserto de terra exposta e rios envenenados. O ar, antes cheio do som do vento e do canto dos pássaros, é tomado pelo vazio de um mundo que se apaga lentamente, deixando um rastro de dor e silêncio na vastidão verde. São os garimpeiros ilegais que chegam com suas máquinas e suas mãos cheias de ambição, rasgando a terra à procura de ouro. Eles não veem que, a cada golpe do machado, estão não só destruindo a floresta, mas também seu próprio futuro. O mercúrio envenena as águas e a vida que dela depende, enquanto o solo, exausto e ferido, já não consegue mais se regenerar. A riqueza que eles buscam vem à custa da alma da Amazônia, uma alma que vai desaparecendo em silêncio, à espera de um fim para essa devastação.`);
                break;
            }
            
        }
    }

    private perderJogo() : void{
        console.log("Você morreu! Lamento... Começe tudo novamente... Tenho certeza que aprendeu algo com a experiência.");
        this._vivo = true;
    }

    private inicio() : void{
        console.log("Olá! Tudo bem? Entre, entre! Me chamo Jansey e aqui é Undefined Florest!! Vou te acompanhar na sua jornada!");
        console.log(this._lore);
        let nome : string;
        do{
             nome = readline.question("Qual o seu nome? ");
            if(nome === "")
                console.log("Digite um nome!");
            else
                break;

        }while(true);

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
        console.log("- Jansey : Vamos andar pela floresta!Que monstro é esse ?! Lute com ela para se defender!");
        const moscaGg1 : MoscaGigante = new MoscaGigante(3);
        const combate1 : Combate = new Combate(this._jogador,  moscaGg1);
        this._vivo = combate1.interacoes();
        if(!this._vivo)
            return false;
        console.log("- Jansey : Ufa! Você conseguiu derrota-la! Continue assim! Não vai ser nem um pouco tranquilo! A cada etapa que passar, você tem dois caminhos a seguir: avançar ou explorar um pouco a floresta para ganhar itens e experiência antes. O que deseja fazer agora?");
        this.interfaceEtapas(1);
        return this._vivo;        
    }

    private segundaEtapa() : boolean{
        const largatoGg1 : LargatoGigante = new LargatoGigante(4);
        const combate2 : Combate = new Combate(this._jogador, largatoGg1);

        console.log("- Jansey : A fonte do rio está seca! Tem muitas pedras empatando que o fluxo de água correr. Você deve retira-las imediatamente!");
        console.log("- Jansey : Oh não! O que é aquilo? Lute contra ele!!");
        this._vivo = combate2.interacoes();
        if(!this._vivo)
            return false;
        console.log("- Jansey : Boa! Conseguiu derrotar aquele monstro e tirar todas as pedras da fonte! Com certeza resolvemos o problema da seca. Mas agora, de onde vem todas essas aberrações?");
        this.interfaceEtapas(2);
        return this._vivo;   
    }

    private terceiraEtapa() : boolean{
        const homemPicareta : HomemPicareta = new HomemPicareta(7);
        const combate3 : Combate = new Combate(this._jogador, homemPicareta);

        console.log("- Jansey : Psiu...Fala baixo... Consegue escutar? Aquilo é uma barraca...Esse homem está injetando algo nesse animais! Por isso estão enormes! Você deve para-lo agora!");
        this._vivo = combate3.interacoes();
        if(!this._vivo)
            return false;
        console.log("- Jansey : Perfeito! Conseguiu derrotar esse bandido!");
        console.log("- Homem com Picareta : Vocês não ideia do que está por vir! Meu chefe vai cuidar de tudo!");
        console.log("- Jansey : Agora fiquei muito preocupado... Vamos destruir todo esse local e ir em frente.");
        this.interfaceEtapas(3);
        return this._vivo; 
    }

    private final() : boolean{
        const homemPicareta1 : HomemPicareta = new HomemPicareta(10);
        const combate1 : Combate = new Combate(this._jogador, homemPicareta1);
        const homemPicareta2 : HomemPicareta = new HomemPicareta(11);
        const combate2 : Combate = new Combate(this._jogador, homemPicareta2);
        const boss : Boss = new Boss();
        const combate3 : Combate = new Combate(this._jogador, boss);

        console.log("- Jansey : Olha aquilo! Que base enorme! Aqui eles jogam pedras nos rios e injetam veneno nos animais para crescerem! Achamos o motivo de todos os problemas de Ainozama! Vamos! Não podemos deixar isso tudo continuar!");

        this._vivo = combate1.interacoes();
        if(!this._vivo)
            return false;
        console.log("- Jansey : Ainda não acabou! Vamos continuar lutando!");
        this._vivo = combate2.interacoes();
        if(!this._vivo)
            return false;
        console.log("- ?? : Vocês são realmente muito fortes... Muito bem... Mas isso acaba agora!");
        console.log("- Garimpeiro : Eu sou o maior garimpeiro da região! Exploro todas essas terras para pegar todas as pedras preciosas que elas podem me oferecer!! Não atrapalhem meus planos! Saiam daqui!");
        console.log("- Jansey : Não sairemos até salvarmos nosso vilarejo! Por que faz tudo isso? Não quer apenas as pedras? Pra que maltratar a natureza dessa forma?");
        console.log("- Garimpeiro : Todos esses vilarejos me atrapalham! Há muitos mineiros por esses locais,  mas os reis não nos permitem mineirar. Nosso objetivo é ataca-los aos poucos pela sua população! Vamos deixa-los sem água e ataca-los com animais ferozes até sairem por vontade própria!");
        console.log(`- Jansey : Vamos acabar contigo! Tenho uma coisa pra ti, ${this._jogador.nome}!`);

        let itemLendario : Itens;
        if(this._jogador instanceof Guerreiro)
            itemLendario = new EspadaLendaria();
        else if(this._jogador instanceof Arqueiro)
            itemLendario = new ArcoLendario();
        else
            itemLendario = new EscudoLendario();

        console.log(`Você recebeu ${itemLendario.nome}`);
        this._jogador.adicionarItem(itemLendario);
        combate3.interacoes();
        return true;
    }

    private interfaceEtapas(etapa : number) : void{
        while(true){
            const escolha : string = readline.question("1 - Avançar\n2 - Explorar\n3 - Ver status\n4 - Ver mochila\n");
            if(escolha === "1")
                break;
            else if(escolha === "2"){
                console.log("------------------------------");
                this.chamarFarm(etapa);
                console.log("- Jansey : Vamos! Temos que continuar!");
                console.log("------------------------------");
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
                this._vivo = this.farmSegundaEtapa();
                break;
            case 3:
                this._vivo = this.farmTerceiraEtapa();
                break;    
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

        console.log("- Jansey : Essa parte da floresta é infestada de moscas!");
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

        console.log("- Jansey :  Muitos monstros aparecem por aqui!");
        this.combatesFarm(listaCombate, listaItens); 

        return this._vivo;
   }
   
   private farmTerceiraEtapa() : boolean{
    const moscaGg1 : MoscaGigante = new MoscaGigante(8);
    const combate1 : Combate = new Combate(this._jogador, moscaGg1);
    const largatoGg1 : LargatoGigante = new LargatoGigante(8);
    const combate2 : Combate = new Combate(this._jogador, largatoGg1);
    const homemPicareta1 : HomemPicareta = new HomemPicareta(8);
    const combate3 : Combate = new Combate(this._jogador, homemPicareta1);
    const listaCombate : Array<Combate> = [combate1, combate2, combate3];

    const pocaoVelo1 : PocaoVelo = new PocaoVelo(1);
    const pocaoVelo2 : PocaoVelo = new PocaoVelo(1)
    const peitoral : Peitoral = new Peitoral();
    const listaItens : Array<Itens> =  [pocaoVelo1, pocaoVelo2, peitoral];

    console.log("- Jansey : As coisas estão cada vez mais complicadas...");
    this.combatesFarm(listaCombate, listaItens); 

    return this._vivo;
    }
}

export default UndefinedFlorest;
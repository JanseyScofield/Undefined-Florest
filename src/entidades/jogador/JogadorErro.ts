class JogadorErro extends Error{
    constructor(menssage : string){
        super(menssage);
        this.name = "JogadorErro";
    }
}

export default JogadorErro;
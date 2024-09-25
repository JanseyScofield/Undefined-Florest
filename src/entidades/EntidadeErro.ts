class EntidadeErro extends Error{
    constructor(menssage :  string){
        super(menssage);
        this.name = "PlayerErro";
    }
}

export default EntidadeErro;
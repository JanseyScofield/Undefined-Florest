class ItensErro extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ItensErro";
    }
}


export = ItensErro;
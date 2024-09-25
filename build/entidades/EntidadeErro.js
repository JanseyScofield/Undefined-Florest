"use strict";
class EntidadeErro extends Error {
    constructor(menssage) {
        super(menssage);
        this.name = "PlayerErro";
    }
}
module.exports = EntidadeErro;

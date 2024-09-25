"use strict";
class JogadorErro extends Error {
    constructor(menssage) {
        super(menssage);
        this.name = "JogadorErro";
    }
}
module.exports = JogadorErro;

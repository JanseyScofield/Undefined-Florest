"use strict";
class ItensErro extends Error {
    constructor(message) {
        super(message);
        this.name = "ItensErro";
    }
}
module.exports = ItensErro;

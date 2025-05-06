"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logico = void 0;
const Expresion_1 = require("../Abstractas/Expresion");
const Tipo_1 = require("../Utilidades/Tipo");
const TipoExpresion_1 = require("../Utilidades/TipoExpresion");
class Logico extends Expresion_1.Expresion {
    constructor(linea, columna, exp1, signo, exp2) {
        super(linea, columna, TipoExpresion_1.TipoExpresion.LOGICO);
        this.exp1 = exp1;
        this.signo = signo;
        this.exp2 = exp2;
        this.tipo = Tipo_1.Tipo.NULL;
    }
    ejecutar(entorno) {
        switch (this.signo) {
            case '&&':
                return this.and(entorno);
            case '||':
                return this.or(entorno);
            case '!':
                return this.not(entorno);
            default:
                throw new Error(`Operador logico no reconocido: ${this.signo}`);
        }
    }
    and(entorno) {
        const valor1 = this.exp1.ejecutar(entorno);
        const valor2 = this.exp2.ejecutar(entorno);
        this.tipo = Tipo_1.Tipo.BOOLEANO;
        return { valor: valor1.valor && valor2.valor, tipo: this.tipo };
    }
    or(entorno) {
        const valor1 = this.exp1.ejecutar(entorno);
        const valor2 = this.exp2.ejecutar(entorno);
        this.tipo = Tipo_1.Tipo.BOOLEANO;
        return { valor: valor1.valor || valor2.valor, tipo: this.tipo };
    }
    not(entorno) {
        const valor = this.exp2.ejecutar(entorno);
        this.tipo = Tipo_1.Tipo.BOOLEANO;
        return { valor: !valor.valor, tipo: this.tipo };
    }
}
exports.Logico = Logico;

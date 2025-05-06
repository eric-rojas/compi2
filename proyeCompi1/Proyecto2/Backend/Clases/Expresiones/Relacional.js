"use strict";

const { Expresion } = require("../Abstractas/Expresion");
const { Tipo } = require("../Utilidades/Tipo");
const { TipoExpresion } = require("../Utilidades/TipoExpresion");

class Relacional extends Expresion {
    constructor(linea, columna, exp1, signo, exp2) {
        super(linea, columna, TipoExpresion.RELACIONAL);
        this.exp1 = exp1;
        this.signo = signo;
        this.exp2 = exp2;
        this.tipo = Tipo.NULL;
    }

    ejecutar(entorno) {
        switch (this.signo) {
            case '==': return this.igual(entorno);
            case '!=': return this.diferente(entorno);
            case '>': return this.mayor(entorno);
            case '<': return this.menor(entorno);
            case '>=': return this.mayorIgual(entorno);
            case '<=': return this.menorIgual(entorno);
            default:
                throw new Error(`Operador relacional no reconocido: ${this.signo}`);
        }
    }

    obtenerValorComparacion(valor) {
        if (valor.tipo === Tipo.CARACTER) {
            return valor.valor.charCodeAt(0);
        }
        return valor.valor;
    }

    igual(entorno) {
        const v1 = this.obtenerValorComparacion(this.exp1.ejecutar(entorno));
        const v2 = this.obtenerValorComparacion(this.exp2.ejecutar(entorno));
        this.tipo = Tipo.BOOLEANO;
        return { valor: v1 === v2, tipo: this.tipo };
    }

    diferente(entorno) {
        const v1 = this.obtenerValorComparacion(this.exp1.ejecutar(entorno));
        const v2 = this.obtenerValorComparacion(this.exp2.ejecutar(entorno));
        this.tipo = Tipo.BOOLEANO;
        return { valor: v1 !== v2, tipo: this.tipo };
    }

    mayor(entorno) {
        const v1 = this.obtenerValorComparacion(this.exp1.ejecutar(entorno));
        const v2 = this.obtenerValorComparacion(this.exp2.ejecutar(entorno));
        this.tipo = Tipo.BOOLEANO;
        return { valor: v1 > v2, tipo: this.tipo };
    }

    menor(entorno) {
        const v1 = this.obtenerValorComparacion(this.exp1.ejecutar(entorno));
        const v2 = this.obtenerValorComparacion(this.exp2.ejecutar(entorno));
        this.tipo = Tipo.BOOLEANO;
        return { valor: v1 < v2, tipo: this.tipo };
    }

    mayorIgual(entorno) {
        const v1 = this.obtenerValorComparacion(this.exp1.ejecutar(entorno));
        const v2 = this.obtenerValorComparacion(this.exp2.ejecutar(entorno));
        this.tipo = Tipo.BOOLEANO;
        return { valor: v1 >= v2, tipo: this.tipo };
    }

    menorIgual(entorno) {
        const v1 = this.obtenerValorComparacion(this.exp1.ejecutar(entorno));
        const v2 = this.obtenerValorComparacion(this.exp2.ejecutar(entorno));
        this.tipo = Tipo.BOOLEANO;
        return { valor: v1 <= v2, tipo: this.tipo };
    }
}

module.exports = { Relacional };

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Relacional = void 0;
const Expresion_1 = require("../Abstractas/Expresion");
const Tipo_1 = require("../Utilidades/Tipo");
const TipoExpresion_1 = require("../Utilidades/TipoExpresion");
class Relacional extends Expresion_1.Expresion {
    constructor(linea, columna, exp1, signo, exp2) {
        super(linea, columna, TipoExpresion_1.TipoExpresion.RELACIONAL);
        this.exp1 = exp1;
        this.signo = signo;
        this.exp2 = exp2;
        this.tipo = Tipo_1.Tipo.NULL;
    }
    ejecutar(entorno) {
        switch (this.signo) {
            case '==':
                return this.igual(entorno);
            case '!=':
                return this.diferente(entorno);
            case '>=':
                return this.mayorIgual(entorno);
            case '<=':
                return this.menorIgual(entorno);
            default:
                throw new Error(`Operador logico no reconocido: ${this.signo}`);
        }
    }
    igual(entorno) {
        const valor1 = this.exp1.ejecutar(entorno);
        const valor2 = this.exp2.ejecutar(entorno);
        this.tipo = Tipo_1.Tipo.BOOLEANO;
        if (valor1.tipo === Tipo_1.Tipo.ENTERO || valor1.tipo === Tipo_1.Tipo.DECIMAL || valor1.tipo === Tipo_1.Tipo.CARACTER) {
            if (valor2.tipo === Tipo_1.Tipo.ENTERO || valor2.tipo === Tipo_1.Tipo.DECIMAL || valor2.tipo === Tipo_1.Tipo.CARACTER) {
                // '2' == 2 => true
                // '2' === 2 => false
                return { valor: valor1.valor === valor2.valor, tipo: this.tipo };
            }
            // Error semántico: no se puede comparar un número con una cadena
        }
        if (valor1.tipo === Tipo_1.Tipo.CADENA && valor2.tipo === Tipo_1.Tipo.CADENA) {
            return { valor: valor1.valor.toString() === valor2.valor.toString(), tipo: this.tipo };
        }
        // Error semántico: Los tipos no son comparables
        return { valor: 'NULL', tipo: Tipo_1.Tipo.NULL };
    }
    diferente(entorno) {
        const valor1 = this.exp1.ejecutar(entorno);
        const valor2 = this.exp2.ejecutar(entorno);
        this.tipo = Tipo_1.Tipo.BOOLEANO;
        return { valor: valor1.valor || valor2.valor, tipo: this.tipo };
    }
    mayorIgual(entorno) {
        const valor1 = this.exp2.ejecutar(entorno);
        const valor2 = this.exp1.ejecutar(entorno);
        this.tipo = Tipo_1.Tipo.BOOLEANO;
        return { valor: valor1.valor >= valor2.valor, tipo: this.tipo };
    }
    menorIgual(entorno) {
        const valor1 = this.exp2.ejecutar(entorno);
        const valor2 = this.exp1.ejecutar(entorno);
        this.tipo = Tipo_1.Tipo.BOOLEANO;
        return { valor: valor1.valor <= valor2.valor, tipo: this.tipo };
    }
}
exports.Relacional = Relacional;

"use strict";
const { Expresion } = require("../Abstractas/Expresion");
const { Tipo } = require("../Utilidades/Tipo");
const { TipoExpresion } = require("../Utilidades/TipoExpresion");
const Dominancia = require("../Utilidades/OperacionDominante");

// Mapa de tipo → índice en la matriz de operaciones
const mapaTipos = {
    0: 0, // ENTERO
    1: 1, // DECIMAL
    2: 2, // BOOLEANO
    3: 3, // CARACTER
    4: 4  // CADENA
    // 5 = NULL, 6 = OBJETO → No se usan en matrices
};

function valorSeguro(valor) {
    if (valor === null || valor === undefined) return "null";
    return valor.toString();
}

class Aritmetico extends Expresion {
    constructor(linea, columna, exp1, signo, exp2) {
        super(linea, columna, TipoExpresion.ARMITEMETICO);
        this.exp1 = exp1;
        this.signo = signo;
        this.exp2 = exp2;
        this.tipo = Tipo.NULL;
    }

    ejecutar(entorno) {
        switch (this.signo) {
            case '+': return this.suma(entorno);
            case '-': return this.exp1 !== undefined ? this.resta(entorno) : this.negacionUnaria(entorno);
            case '*': return this.multiplicacion(entorno);
            case '/': return this.division(entorno);
            case '^': return this.potencia(entorno);
            case '%': return this.modulo(entorno);
            default:
                throw new Error(`Operador aritmético no reconocido: ${this.signo}`);
        }
    }

    obtenerValorNumerico(dato) {
        if (dato.tipo === Tipo.CARACTER) return dato.valor.charCodeAt(0);
        if (dato.valor === null || dato.valor === undefined) return 0;
        return dato.valor;
    }

    obtenerTipoDominante(matriz, tipo1, tipo2) {
        const i = mapaTipos[tipo1];
        const j = mapaTipos[tipo2];
        if (i === undefined || j === undefined || !matriz[i] || matriz[i][j] === undefined) {
            throw new Error(`❌ Operación no soportada entre tipos ${tipo1} y ${tipo2}`);
        }
        return matriz[i][j];
    }

    suma(entorno) {
        const valor1 = this.exp1.ejecutar(entorno);
        const valor2 = this.exp2.ejecutar(entorno);
        this.tipo = this.obtenerTipoDominante(Dominancia.suma, valor1.tipo, valor2.tipo);

        if (this.tipo === Tipo.ENTERO || this.tipo === Tipo.DECIMAL) {
            return { valor: this.obtenerValorNumerico(valor1) + this.obtenerValorNumerico(valor2), tipo: this.tipo };
        } else if (this.tipo === Tipo.CADENA) {
            return { valor: valorSeguro(valor1.valor) + valorSeguro(valor2.valor), tipo: this.tipo };
        }
        return { valor: 'NULL', tipo: Tipo.NULL };
    }

    resta(entorno) {
        const valor1 = this.exp1.ejecutar(entorno);
        const valor2 = this.exp2.ejecutar(entorno);
        this.tipo = this.obtenerTipoDominante(Dominancia.resta, valor1.tipo, valor2.tipo);

        if (this.tipo === Tipo.ENTERO || this.tipo === Tipo.DECIMAL) {
            return { valor: this.obtenerValorNumerico(valor1) - this.obtenerValorNumerico(valor2), tipo: this.tipo };
        }
        return { valor: 'NULL', tipo: Tipo.NULL };
    }

    negacionUnaria(entorno) {
        const valor = this.exp2.ejecutar(entorno);
        this.tipo = valor.tipo;
        if (this.tipo === Tipo.ENTERO || this.tipo === Tipo.DECIMAL) {
            return { valor: -this.obtenerValorNumerico(valor), tipo: this.tipo };
        }
        return { valor: 'NULL', tipo: Tipo.NULL };
    }

    multiplicacion(entorno) {
        const valor1 = this.exp1.ejecutar(entorno);
        const valor2 = this.exp2.ejecutar(entorno);
        this.tipo = this.obtenerTipoDominante(Dominancia.multiplicacion, valor1.tipo, valor2.tipo);

        if (this.tipo === Tipo.ENTERO || this.tipo === Tipo.DECIMAL) {
            return { valor: this.obtenerValorNumerico(valor1) * this.obtenerValorNumerico(valor2), tipo: this.tipo };
        }
        return { valor: 'NULL', tipo: Tipo.NULL };
    }

    division(entorno) {
        const valor1 = this.exp1.ejecutar(entorno);
        const valor2 = this.exp2.ejecutar(entorno);
        this.tipo = this.obtenerTipoDominante(Dominancia.division, valor1.tipo, valor2.tipo);

        if (this.tipo === Tipo.ENTERO || this.tipo === Tipo.DECIMAL) {
            return { valor: this.obtenerValorNumerico(valor1) / this.obtenerValorNumerico(valor2), tipo: this.tipo };
        }
        return { valor: 'NULL', tipo: Tipo.NULL };
    }

    potencia(entorno) {
        const valor1 = this.exp1.ejecutar(entorno);
        const valor2 = this.exp2.ejecutar(entorno);
        this.tipo = this.obtenerTipoDominante(Dominancia.potencia, valor1.tipo, valor2.tipo);

        if (this.tipo === Tipo.ENTERO || this.tipo === Tipo.DECIMAL) {
            return { valor: Math.pow(this.obtenerValorNumerico(valor1), this.obtenerValorNumerico(valor2)), tipo: this.tipo };
        }
        return { valor: 'NULL', tipo: Tipo.NULL };
    }

    modulo(entorno) {
        const valor1 = this.exp1.ejecutar(entorno);
        const valor2 = this.exp2.ejecutar(entorno);
        this.tipo = Tipo.DECIMAL;

        if ((valor1.tipo === Tipo.ENTERO || valor1.tipo === Tipo.DECIMAL || valor1.tipo === Tipo.CARACTER) &&
            (valor2.tipo === Tipo.ENTERO || valor2.tipo === Tipo.DECIMAL || valor2.tipo === Tipo.CARACTER)) {
            return { valor: this.obtenerValorNumerico(valor1) % this.obtenerValorNumerico(valor2), tipo: this.tipo };
        }
        return { valor: 'NULL', tipo: Tipo.NULL };
    }
}

module.exports = { Aritmetico };

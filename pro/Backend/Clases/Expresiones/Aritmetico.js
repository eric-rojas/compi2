"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aritmetico = void 0;
const Expresion_1 = require("../Abstractas/Expresion");
const Tipo_1 = require("../Utilidades/Tipo");
const TipoExpresion_1 = require("../Utilidades/TipoExpresion");
const OperacionDominante_1 = require("../Utilidades/OperacionDominante");
class Aritmetico extends Expresion_1.Expresion {
    constructor(linea, columna, exp1, signo, exp2) {
        super(linea, columna, TipoExpresion_1.TipoExpresion.ARMITEMETICO);
        this.exp1 = exp1;
        this.signo = signo;
        this.exp2 = exp2;
        this.tipo = Tipo_1.Tipo.NULL;
    }
    ejecutar(entorno) {
        switch (this.signo) {
            case '+':
                return this.suma(entorno);
            case '-':
                if (this.exp1 !== undefined) {
                    return this.resta(entorno);
                }
                return this.negacionUnaria(entorno);
            case '*':
                return this.multiplicacion(entorno);
            case '/':
                return this.division(entorno);
            case '^':
                return this.potencia(entorno);
            default:
                throw new Error(`Operador logico no reconocido: ${this.signo}`);
        }
    }
    suma(entorno) {
        const valor1 = this.exp1.ejecutar(entorno);
        const valor2 = this.exp2.ejecutar(entorno);
        this.tipo = OperacionDominante_1.suma[valor1.tipo][valor2.tipo];
        if (this.tipo !== Tipo_1.Tipo.NULL) {
            if (this.tipo === Tipo_1.Tipo.ENTERO) {
                return { valor: valor1.valor + valor2.valor, tipo: this.tipo };
            }
            else if (this.tipo === Tipo_1.Tipo.DECIMAL) {
                return { valor: valor1.valor + valor2.valor, tipo: this.tipo };
            }
            else if (this.tipo === Tipo_1.Tipo.CADENA) {
                return { valor: valor1.valor.toString() + valor2.valor.toString(), tipo: this.tipo };
            }
        }
        return { valor: valor1.valor && valor2.valor, tipo: this.tipo };
    }
    resta(entorno) {
        const valor1 = this.exp1.ejecutar(entorno);
        const valor2 = this.exp2.ejecutar(entorno);
        this.tipo = OperacionDominante_1.suma[valor1.tipo][valor2.tipo];
        if (this.tipo !== Tipo_1.Tipo.NULL) {
            if (this.tipo === Tipo_1.Tipo.ENTERO) {
                return { valor: valor1.valor - valor2.valor, tipo: this.tipo };
            }
            else if (this.tipo === Tipo_1.Tipo.DECIMAL) {
                return { valor: valor1.valor - valor2.valor, tipo: this.tipo };
            }
            else if (this.tipo === Tipo_1.Tipo.CADENA) {
                // Error semántico: no se puede restar cadenas
            }
        }
        return { valor: valor1.valor && valor2.valor, tipo: this.tipo };
    }
    negacionUnaria(entorno) {
        const valor = this.exp2.ejecutar(entorno);
        this.tipo = valor.tipo;
        if (this.tipo === Tipo_1.Tipo.ENTERO || this.tipo === Tipo_1.Tipo.DECIMAL) {
            return { valor: -valor.valor, tipo: this.tipo };
        }
        // Error semántico: no se puede negar un valor que no es numérico
        return { valor: 'NULL', tipo: Tipo_1.Tipo.NULL };
    }
    multiplicacion(entorno) {
        let valor1 = this.exp1.ejecutar(entorno);
        let valor2 = this.exp2.ejecutar(entorno);
        this.tipo = OperacionDominante_1.multiplicacion[valor1.tipo][valor2.tipo];
        if (this.tipo !== Tipo_1.Tipo.NULL) {
            if (this.tipo === Tipo_1.Tipo.ENTERO) {
                return { valor: valor1.valor * valor2.valor, tipo: this.tipo };
            }
            else if (this.tipo === Tipo_1.Tipo.DECIMAL) {
                return { valor: valor1.valor * valor2.valor, tipo: this.tipo };
            }
        }
        return { valor: 'NULL', tipo: Tipo_1.Tipo.NULL };
    }
    division(entorno) {
        let valor1 = this.exp1.ejecutar(entorno);
        let valor2 = this.exp2.ejecutar(entorno);
        this.tipo = OperacionDominante_1.multiplicacion[valor1.tipo][valor2.tipo];
        if (this.tipo !== Tipo_1.Tipo.NULL) {
            if (this.tipo === Tipo_1.Tipo.ENTERO) {
                return { valor: valor1.valor / valor2.valor, tipo: this.tipo };
            }
            else if (this.tipo === Tipo_1.Tipo.DECIMAL) {
                return { valor: valor1.valor / valor2.valor, tipo: this.tipo };
            }
        }
        return { valor: 'NULL', tipo: Tipo_1.Tipo.NULL };
    }
    potencia(entorno) {
        let valor1 = this.exp1.ejecutar(entorno);
        let valor2 = this.exp2.ejecutar(entorno);
        this.tipo = OperacionDominante_1.potencia[valor1.tipo][valor2.tipo];
        if (this.tipo !== Tipo_1.Tipo.NULL) {
            if (this.tipo === Tipo_1.Tipo.ENTERO) {
                return { valor: Math.pow(valor1.valor, valor2.valor), tipo: this.tipo };
            }
            else if (this.tipo === Tipo_1.Tipo.DECIMAL) {
                return { valor: Math.pow(valor1.valor, valor2.valor), tipo: this.tipo };
            }
        }
        return { valor: 'NULL', tipo: Tipo_1.Tipo.NULL };
    }
}
exports.Aritmetico = Aritmetico;

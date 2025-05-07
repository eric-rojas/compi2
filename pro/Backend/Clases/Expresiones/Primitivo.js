"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primitivo = void 0;
const Expresion_1 = require("../Abstractas/Expresion");
const Tipo_1 = require("../Utilidades/Tipo");
const TipoExpresion_1 = require("../Utilidades/TipoExpresion");
class Primitivo extends Expresion_1.Expresion {
    constructor(linea, columna, valor, tipo) {
        super(linea, columna, TipoExpresion_1.TipoExpresion.PRIMITIVO);
        this.valor = valor;
        this.tipo = tipo;
    }
    ejecutar(_) {
        switch (this.tipo) {
            case Tipo_1.Tipo.ENTERO:
                return { valor: parseInt(this.valor), tipo: this.tipo };
            case Tipo_1.Tipo.DECIMAL:
                return { valor: parseFloat(this.valor), tipo: this.tipo };
            case Tipo_1.Tipo.BOOLEANO:
                return { valor: this.valor.toString() === 'verdadero', tipo: this.tipo };
            case Tipo_1.Tipo.CARACTER:
                return { valor: this.valor.toString().charCodeAt(0), tipo: this.tipo };
            default:
                this.valor = this.valor.replace(/\\n/g, '\n');
                this.valor = this.valor.replace(/\\t/g, '\t');
                this.valor = this.valor.replace(/\\"/g, '\"');
                this.valor = this.valor.replace(/\\'/g, '\'');
                this.valor = this.valor.replace(/\\\\/g, '\\');
                return { valor: this.valor, tipo: this.tipo };
        }
    }
}
exports.Primitivo = Primitivo;

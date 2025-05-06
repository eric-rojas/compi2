"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimboloTabla = void 0;
const Tipo_1 = require("../Utilidades/Tipo");
class SimboloTabla {
    constructor(linea, columna, isVariable, isPrimitive, valor, tipo, id, nombreEntorno) {
        this.linea = linea;
        this.columna = columna;
        this.isVariable = isVariable;
        this.isPrimitive = isPrimitive;
        this.valor = valor;
        this.tipo = tipo;
        this.id = id;
        this.nombreEntorno = nombreEntorno;
        this.indice = 0;
    }
    toString() {
        return '║ ' + `${this.id}`.padEnd(20) + ' ║ ' + `${this.getTipo(this.tipo)}`.padEnd(10) + ' ║ ' + `${this.nombreEntorno}`.padEnd(15) + ' ║ ' + `${this.linea}`.padEnd(5) + ' ║ ' + `${this.columna}`.padEnd(7) + ' ║ ';
    }
    hash() {
        return `${this.id}_${this.tipo}_${this.nombreEntorno}_${this.linea}_${this.columna}_${this.isVariable}_${this.isPrimitive}`;
    }
    getTipo(tipo) {
        switch (this.tipo) {
            case Tipo_1.Tipo.ENTERO:
                return "entero";
            case Tipo_1.Tipo.DECIMAL:
                return "decimal";
            case Tipo_1.Tipo.BOOLEANO:
                return "booleano";
            case Tipo_1.Tipo.CARACTER:
                return "caracter";
            case Tipo_1.Tipo.CADENA:
                return "cadena";
            case Tipo_1.Tipo.NULL:
                return "null";
            default:
                return "desconocido";
        }
    }
}
exports.SimboloTabla = SimboloTabla;

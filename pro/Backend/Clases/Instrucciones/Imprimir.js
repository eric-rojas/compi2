"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Imprimir = void 0;
const Instruccion_1 = require("../Abstractas/Instruccion");
const TipoInstruccion_1 = require("../Utilidades/TipoInstruccion");
class Imprimir extends Instruccion_1.Instruccion {
    constructor(linea, columna, expresion) {
        super(linea, columna, TipoInstruccion_1.TipoInstruccion.IMPRIMIR);
        this.expresion = expresion;
    }
    ejecutar(entorno) {
        let valor = this.expresion ? this.expresion.ejecutar(entorno) : null;
        entorno.setPrint(valor ? valor.valor : '');
    }
}
exports.Imprimir = Imprimir;

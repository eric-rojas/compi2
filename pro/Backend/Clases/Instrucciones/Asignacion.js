"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asignacion = void 0;
const Instruccion_1 = require("../Abstractas/Instruccion");
const TipoInstruccion_1 = require("../Utilidades/TipoInstruccion");
class Asignacion extends Instruccion_1.Instruccion {
    constructor(linea, columna, id, valor) {
        super(linea, columna, TipoInstruccion_1.TipoInstruccion.ASIGNACION);
        this.id = id;
        this.valor = valor;
    }
    ejecutar(entorno) {
        let valor = this.valor.ejecutar(entorno);
        entorno.setVariable(this.id, valor.valor);
    }
}
exports.Asignacion = Asignacion;

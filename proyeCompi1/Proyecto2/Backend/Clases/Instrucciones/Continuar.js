"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Continuar = void 0;
const Instruccion_1 = require("../Abstractas/Instruccion");
const TipoInstruccion_1 = require("../Utilidades/TipoInstruccion");
class Continuar extends Instruccion_1.Instruccion {
    constructor(linea, columna) {
        super(linea, columna, TipoInstruccion_1.TipoInstruccion.CONTINUAR);
    }
    ejecutar(entorno) {
        return { valor: this.tipoInstruccion, tipo: null };
    }
}
exports.Continuar = Continuar;

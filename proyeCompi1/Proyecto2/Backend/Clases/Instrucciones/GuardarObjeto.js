"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuardarObjeto = void 0;
const Instruccion_1 = require("../Abstractas/Instruccion");
const TipoInstruccion_1 = require("../Utilidades/TipoInstruccion");
class GuardarObjeto extends Instruccion_1.Instruccion {
    constructor(linea, columna, id, atributos) {
        super(linea, columna, TipoInstruccion_1.TipoInstruccion.CREAR_OBJETO);
        this.id = id;
        this.atributos = atributos;
    }
    ejecutar(entorno) {
        entorno.guardarObjeto(this.id, this.atributos);
    }
}
exports.GuardarObjeto = GuardarObjeto;

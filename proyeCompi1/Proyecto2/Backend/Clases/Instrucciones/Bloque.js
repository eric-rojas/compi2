"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bloque = void 0;
const Instruccion_1 = require("../Abstractas/Instruccion");
const Entorno_1 = require("../Entorno/Entorno");
const TipoInstruccion_1 = require("../Utilidades/TipoInstruccion");
class Bloque extends Instruccion_1.Instruccion {
    constructor(linea, columna, instrucciones) {
        super(linea, columna, TipoInstruccion_1.TipoInstruccion.BLOQUE_INSTRUCCIONES);
        this.instrucciones = instrucciones;
    }
    ejecutar(entorno) {
        const nuevoEntorno = new Entorno_1.Entorno(entorno, entorno.nombre);
        for (const instruccion of this.instrucciones) {
            try {
                const result = instruccion.ejecutar(nuevoEntorno);
                if (result) {
                    return result;
                }
            }
            catch (error) { }
        }
    }
}
exports.Bloque = Bloque;

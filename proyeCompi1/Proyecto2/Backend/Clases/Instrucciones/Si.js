"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Si = void 0;
const Instruccion_1 = require("../Abstractas/Instruccion");
const Entorno_1 = require("../Entorno/Entorno");
const TipoInstruccion_1 = require("../Utilidades/TipoInstruccion");
const Bloque_1 = require("./Bloque");
class Si extends Instruccion_1.Instruccion {
    constructor(linea, columna, condicion, instrucciones, excepsion) {
        super(linea, columna, TipoInstruccion_1.TipoInstruccion.SI);
        this.condicion = condicion;
        this.instrucciones = instrucciones;
        this.excepsion = excepsion;
        this.bloque = new Bloque_1.Bloque(linea, columna, instrucciones);
        this.bloqueExcepsion = new Bloque_1.Bloque(linea, columna, excepsion);
    }
    ejecutar(entorno) {
        let condicion = this.condicion.ejecutar(entorno);
        const entornoLocal = new Entorno_1.Entorno(entorno, entorno.nombre + '_IF');
        if (condicion.valor) { // if (condicion)
            let bloque = this.bloque.ejecutar(entornoLocal);
            if (bloque) {
                return bloque;
            }
            return;
        }
        // else
        if (this.excepsion) {
            let bloqueExcepsion = this.bloqueExcepsion.ejecutar(entornoLocal);
            if (bloqueExcepsion) {
                return bloqueExcepsion;
            }
            return;
        }
        return;
    }
}
exports.Si = Si;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Para = void 0;
const Instruccion_1 = require("../Abstractas/Instruccion");
const Entorno_1 = require("../Entorno/Entorno");
const Tipo_1 = require("../Utilidades/Tipo");
const TipoInstruccion_1 = require("../Utilidades/TipoInstruccion");
const Bloque_1 = require("./Bloque");
class Para extends Instruccion_1.Instruccion {
    constructor(linea, columna, inicio, limiteInferior, limiteSuperior, paso, instrucciones) {
        super(linea, columna, TipoInstruccion_1.TipoInstruccion.PARA);
        this.inicio = inicio;
        this.limiteInferior = limiteInferior;
        this.limiteSuperior = limiteSuperior;
        this.paso = paso;
        this.instrucciones = instrucciones;
        this.bloque = new Bloque_1.Bloque(linea, columna, instrucciones);
    }
    ejecutar(entorno) {
        const entornoLocal = new Entorno_1.Entorno(entorno, entorno.nombre + '_FOR');
        var limiteInferior = this.limiteInferior.ejecutar(entornoLocal);
        if (limiteInferior.tipo != Tipo_1.Tipo.ENTERO) {
            // Tipo no válido para el rango de iteración
            return;
        }
        var limiteSuperior = this.limiteSuperior.ejecutar(entornoLocal);
        if (limiteSuperior.tipo != Tipo_1.Tipo.ENTERO) {
            // Tipo no válido para el rango de iteración
            return;
        }
        // Buscar la variable del iterador
        if (this.paso == 'incremento') {
            if (entorno.getVariable(this.inicio)) {
                for (let i = limiteInferior.valor; i <= limiteSuperior.valor; i++) {
                    entorno.setVariable(this.inicio, i);
                    let bloque = this.bloque.ejecutar(entornoLocal);
                    if (bloque) {
                        if (bloque.valor == TipoInstruccion_1.TipoInstruccion.CONTINUAR) {
                            continue; // Continuar con la siguiente iteración
                        }
                        return bloque;
                    }
                }
                return;
            }
        }
        else if (this.paso == 'decremento') {
            if (entorno.getVariable(this.inicio)) {
                for (let i = limiteInferior.valor; i >= limiteSuperior.valor; i--) {
                    entorno.setVariable(this.inicio, i);
                    let bloque = this.bloque.ejecutar(entornoLocal);
                    if (bloque) {
                        if (bloque.valor == TipoInstruccion_1.TipoInstruccion.CONTINUAR) {
                            continue; // Continuar con la siguiente iteración
                        }
                        return bloque;
                    }
                }
                return;
            }
        }
    }
}
exports.Para = Para;

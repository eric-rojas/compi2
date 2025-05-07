"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcion = void 0;
const Instruccion_1 = require("../Abstractas/Instruccion");
const TipoInstruccion_1 = require("../Utilidades/TipoInstruccion");
class Funcion extends Instruccion_1.Instruccion {
    constructor(linea, columna, nombreFuncion, tipo, parametros, instrucciones) {
        super(linea, columna, TipoInstruccion_1.TipoInstruccion.DECLARAR_FUNCION);
        this.nombreFuncion = nombreFuncion;
        this.tipo = tipo;
        this.parametros = parametros;
        this.instrucciones = instrucciones;
    }
    ejecutar(entorno) {
        entorno.guardarFuncion(this.nombreFuncion, this);
    }
}
exports.Funcion = Funcion;

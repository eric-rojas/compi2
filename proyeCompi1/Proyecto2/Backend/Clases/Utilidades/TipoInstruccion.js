"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoInstruccion = void 0;
var TipoInstruccion;
(function (TipoInstruccion) {
    TipoInstruccion[TipoInstruccion["IMPRIMIR"] = 0] = "IMPRIMIR";
    TipoInstruccion[TipoInstruccion["CREAR_VARIABLE"] = 1] = "CREAR_VARIABLE";
    TipoInstruccion[TipoInstruccion["CREAR_OBJETO"] = 2] = "CREAR_OBJETO";
    TipoInstruccion[TipoInstruccion["ASIGNACION"] = 3] = "ASIGNACION";
    TipoInstruccion[TipoInstruccion["INCREMENTO"] = 4] = "INCREMENTO";
    TipoInstruccion[TipoInstruccion["DECREMENTO"] = 5] = "DECREMENTO";
    TipoInstruccion[TipoInstruccion["BLOQUE_INSTRUCCIONES"] = 6] = "BLOQUE_INSTRUCCIONES";
    TipoInstruccion[TipoInstruccion["SI"] = 7] = "SI";
    TipoInstruccion[TipoInstruccion["PARA"] = 8] = "PARA";
    TipoInstruccion[TipoInstruccion["DECLARAR_FUNCION"] = 9] = "DECLARAR_FUNCION";
    TipoInstruccion[TipoInstruccion["CONTINUAR"] = 10] = "CONTINUAR";
})(TipoInstruccion || (exports.TipoInstruccion = TipoInstruccion = {}));

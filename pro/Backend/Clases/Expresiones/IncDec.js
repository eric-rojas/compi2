"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncDec = void 0;
const Instruccion_1 = require("../Abstractas/Instruccion");
const TipoInstruccion_1 = require("../Utilidades/TipoInstruccion");
class IncDec extends Instruccion_1.Instruccion {
    constructor(linea, columna, id, operacion) {
        super(linea, columna, TipoInstruccion_1.TipoInstruccion.INCREMENTO);
        this.id = id;
        this.operacion = operacion;
    }
    ejecutar(entorno) {
        let valor = entorno.getVariable(this.id);
        if (valor !== undefined) {
            let v;
            switch (this.operacion) {
                case 'inc':
                    v = (valor === null || valor === void 0 ? void 0 : valor.valor) + 1;
                    entorno.setVariable(this.id, v);
                    return { valor: v, tipo: valor === null || valor === void 0 ? void 0 : valor.tipo };
                case 'dec':
                    v = (valor === null || valor === void 0 ? void 0 : valor.valor) - 1;
                    entorno.setVariable(this.id, v);
                    return { valor: v, tipo: valor === null || valor === void 0 ? void 0 : valor.tipo };
                default:
                // Error: Operacion no soportada
            }
        }
    }
}
exports.IncDec = IncDec;

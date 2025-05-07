"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeclaracionID = void 0;
const Instruccion_1 = require("../Abstractas/Instruccion");
const TipoInstruccion_1 = require("../Utilidades/TipoInstruccion");
class DeclaracionID extends Instruccion_1.Instruccion {
    constructor(linea, columna, id, tipo, valor) {
        super(linea, columna, TipoInstruccion_1.TipoInstruccion.CREAR_VARIABLE);
        this.id = id;
        this.tipo = tipo;
        this.valor = valor;
    }
    ejecutar(entorno) {
        var _a;
        if (typeof this.id === 'string' && typeof this.tipo === 'number' && this.valor) {
            const valor = (_a = this.valor) === null || _a === void 0 ? void 0 : _a.ejecutar(entorno);
            if (valor.tipo === this.tipo) {
                entorno.guardarVariable(this.id, valor.valor, this.tipo, this.linea, this.columna);
            }
            else {
                // Error semántico - Tipo de dato incorrecto
            }
        }
    }
}
exports.DeclaracionID = DeclaracionID;

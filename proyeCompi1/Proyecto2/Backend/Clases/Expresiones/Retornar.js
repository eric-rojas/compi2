"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Retornar = void 0;
const Expresion_1 = require("../Abstractas/Expresion");
const Tipo_1 = require("../Utilidades/Tipo");
const TipoExpresion_1 = require("../Utilidades/TipoExpresion");
class Retornar extends Expresion_1.Expresion {
    constructor(linea, columna, expresion) {
        super(linea, columna, TipoExpresion_1.TipoExpresion.RETORNAR);
        this.expresion = expresion;
    }
    ejecutar(entorno) {
        // validación para la expresión de retorno
        if (this.expresion) {
            const valor = this.expresion.ejecutar(entorno);
            return { valor: valor.valor, tipo: valor.tipo };
        }
        return { valor: this.tipoExpresion, tipo: Tipo_1.Tipo.NULL };
    }
}
exports.Retornar = Retornar;

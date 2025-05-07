"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccesoID = void 0;
const Expresion_1 = require("../Abstractas/Expresion");
const Tipo_1 = require("../Utilidades/Tipo");
const TipoExpresion_1 = require("../Utilidades/TipoExpresion");
class AccesoID extends Expresion_1.Expresion {
    constructor(linea, columna, id) {
        super(linea, columna, TipoExpresion_1.TipoExpresion.ACCESO_ID);
        this.id = id;
    }
    ejecutar(entorno) {
        const valor = entorno.getVariable(this.id);
        if (valor) {
            return { valor: valor.valor, tipo: valor.tipo };
        }
        return { valor: 'NULL', tipo: Tipo_1.Tipo.NULL };
    }
}
exports.AccesoID = AccesoID;

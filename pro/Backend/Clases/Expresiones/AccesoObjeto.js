"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccesoObjeto = void 0;
const Expresion_1 = require("../Abstractas/Expresion");
const Tipo_1 = require("../Utilidades/Tipo");
const TipoExpresion_1 = require("../Utilidades/TipoExpresion");
class AccesoObjeto extends Expresion_1.Expresion {
    constructor(linea, columna, id) {
        super(linea, columna, TipoExpresion_1.TipoExpresion.ACCESO_ID);
        this.id = id;
    }
    ejecutar(entorno) {
        const valor = entorno.getObjeto(this.id);
        if (valor) {
            return { valor: valor === null || valor === void 0 ? void 0 : valor.id, tipo: Tipo_1.Tipo.OBJETO };
        }
        return { valor: 'NULL', tipo: Tipo_1.Tipo.NULL };
    }
}
exports.AccesoObjeto = AccesoObjeto;

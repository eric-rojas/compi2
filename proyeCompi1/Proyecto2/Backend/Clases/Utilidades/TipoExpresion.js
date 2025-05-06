"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoExpresion = void 0;
var TipoExpresion;
(function (TipoExpresion) {
    TipoExpresion[TipoExpresion["PRIMITIVO"] = 0] = "PRIMITIVO";
    TipoExpresion[TipoExpresion["ARMITEMETICO"] = 1] = "ARMITEMETICO";
    TipoExpresion[TipoExpresion["RELACIONAL"] = 2] = "RELACIONAL";
    TipoExpresion[TipoExpresion["LOGICO"] = 3] = "LOGICO";
    TipoExpresion[TipoExpresion["ACCESO_ID"] = 4] = "ACCESO_ID";
    TipoExpresion[TipoExpresion["FUNCION_NATIVA"] = 5] = "FUNCION_NATIVA";
    TipoExpresion[TipoExpresion["INC_DEC"] = 6] = "INC_DEC";
    TipoExpresion[TipoExpresion["RETORNAR"] = 7] = "RETORNAR";
})(TipoExpresion || (exports.TipoExpresion = TipoExpresion = {}));

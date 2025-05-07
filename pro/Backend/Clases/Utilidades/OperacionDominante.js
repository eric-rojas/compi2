"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.potencia = exports.division = exports.multiplicacion = exports.resta = exports.suma = void 0;
const Tipo_1 = require("./Tipo");
exports.suma = [
    [Tipo_1.Tipo.ENTERO, Tipo_1.Tipo.DECIMAL, Tipo_1.Tipo.ENTERO, Tipo_1.Tipo.ENTERO, Tipo_1.Tipo.CADENA],
    [Tipo_1.Tipo.DECIMAL, Tipo_1.Tipo.DECIMAL, Tipo_1.Tipo.DECIMAL, Tipo_1.Tipo.DECIMAL, Tipo_1.Tipo.DECIMAL],
    [Tipo_1.Tipo.ENTERO, Tipo_1.Tipo.DECIMAL, Tipo_1.Tipo.NULL, Tipo_1.Tipo.NULL, Tipo_1.Tipo.CADENA],
    [Tipo_1.Tipo.ENTERO, Tipo_1.Tipo.DECIMAL, Tipo_1.Tipo.NULL, Tipo_1.Tipo.CADENA, Tipo_1.Tipo.CADENA],
    [Tipo_1.Tipo.CADENA, Tipo_1.Tipo.CADENA, Tipo_1.Tipo.CADENA, Tipo_1.Tipo.CADENA, Tipo_1.Tipo.CADENA],
];
exports.resta = [
    [Tipo_1.Tipo.ENTERO, Tipo_1.Tipo.DECIMAL, Tipo_1.Tipo.ENTERO, Tipo_1.Tipo.ENTERO, Tipo_1.Tipo.NULL],
    [Tipo_1.Tipo.DECIMAL, Tipo_1.Tipo.DECIMAL, Tipo_1.Tipo.DECIMAL, Tipo_1.Tipo.DECIMAL, Tipo_1.Tipo.NULL],
    [Tipo_1.Tipo.ENTERO, Tipo_1.Tipo.DECIMAL, Tipo_1.Tipo.NULL, Tipo_1.Tipo.NULL, Tipo_1.Tipo.NULL],
    [Tipo_1.Tipo.ENTERO, Tipo_1.Tipo.DECIMAL, Tipo_1.Tipo.NULL, Tipo_1.Tipo.NULL, Tipo_1.Tipo.NULL],
    [Tipo_1.Tipo.NULL, Tipo_1.Tipo.NULL, Tipo_1.Tipo.NULL, Tipo_1.Tipo.NULL, Tipo_1.Tipo.NULL],
];
exports.multiplicacion = [
    [Tipo_1.Tipo.ENTERO, Tipo_1.Tipo.DECIMAL, Tipo_1.Tipo.ENTERO],
    [Tipo_1.Tipo.DECIMAL, Tipo_1.Tipo.DECIMAL, Tipo_1.Tipo.DECIMAL],
    [Tipo_1.Tipo.ENTERO, Tipo_1.Tipo.DECIMAL, Tipo_1.Tipo.NULL],
];
exports.division = [
    [Tipo_1.Tipo.DECIMAL, Tipo_1.Tipo.DECIMAL, Tipo_1.Tipo.DECIMAL],
    [Tipo_1.Tipo.DECIMAL, Tipo_1.Tipo.DECIMAL, Tipo_1.Tipo.DECIMAL],
    [Tipo_1.Tipo.DECIMAL, Tipo_1.Tipo.DECIMAL, Tipo_1.Tipo.NULL],
];
exports.potencia = [
    [Tipo_1.Tipo.ENTERO, Tipo_1.Tipo.DECIMAL],
    [Tipo_1.Tipo.DECIMAL, Tipo_1.Tipo.DECIMAL],
];

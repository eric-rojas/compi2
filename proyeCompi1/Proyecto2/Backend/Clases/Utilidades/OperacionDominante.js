"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.potencia = exports.modulo = exports.division = exports.multiplicacion = exports.resta = exports.suma = void 0;

const Tipo_1 = require("./Tipo");
const N = Tipo_1.Tipo.NULL;

exports.suma = [
    [Tipo_1.Tipo.ENTERO, Tipo_1.Tipo.DECIMAL, N, Tipo_1.Tipo.ENTERO, Tipo_1.Tipo.CADENA],
    [Tipo_1.Tipo.DECIMAL, Tipo_1.Tipo.DECIMAL, N, Tipo_1.Tipo.DECIMAL, Tipo_1.Tipo.CADENA],
    [N, N, N, N, N],
    [Tipo_1.Tipo.ENTERO, Tipo_1.Tipo.DECIMAL, N, Tipo_1.Tipo.ENTERO, Tipo_1.Tipo.CADENA],
    [Tipo_1.Tipo.CADENA, Tipo_1.Tipo.CADENA, N, Tipo_1.Tipo.CADENA, Tipo_1.Tipo.CADENA],
];

exports.resta = [
    [Tipo_1.Tipo.ENTERO, Tipo_1.Tipo.DECIMAL, N, Tipo_1.Tipo.ENTERO, N],
    [Tipo_1.Tipo.DECIMAL, Tipo_1.Tipo.DECIMAL, N, Tipo_1.Tipo.DECIMAL, N],
    [N, N, N, N, N],
    [Tipo_1.Tipo.ENTERO, Tipo_1.Tipo.DECIMAL, N, Tipo_1.Tipo.ENTERO, N],
    [N, N, N, N, N],
];

exports.multiplicacion = [
    [Tipo_1.Tipo.ENTERO, Tipo_1.Tipo.DECIMAL, N, Tipo_1.Tipo.ENTERO, N],
    [Tipo_1.Tipo.DECIMAL, Tipo_1.Tipo.DECIMAL, N, Tipo_1.Tipo.DECIMAL, N],
    [N, N, N, N, N],
    [Tipo_1.Tipo.ENTERO, Tipo_1.Tipo.DECIMAL, N, Tipo_1.Tipo.ENTERO, N],
    [N, N, N, N, N],
];

exports.division = [
    [Tipo_1.Tipo.DECIMAL, Tipo_1.Tipo.DECIMAL, N, Tipo_1.Tipo.DECIMAL, N], // ENTERO
    [Tipo_1.Tipo.DECIMAL, Tipo_1.Tipo.DECIMAL, N, Tipo_1.Tipo.DECIMAL, N], // DECIMAL
    [N, N, N, N, N],                                                       // BOOLEANO
    [Tipo_1.Tipo.DECIMAL, Tipo_1.Tipo.DECIMAL, N, Tipo_1.Tipo.DECIMAL, N], // CARACTER
    [N, N, N, N, N]                                                        // CADENA
];


exports.potencia = [
    [Tipo_1.Tipo.ENTERO, Tipo_1.Tipo.DECIMAL, N, Tipo_1.Tipo.ENTERO, N],
    [Tipo_1.Tipo.DECIMAL, Tipo_1.Tipo.DECIMAL, N, Tipo_1.Tipo.DECIMAL, N],
    [N, N, N, N, N],
    [Tipo_1.Tipo.ENTERO, Tipo_1.Tipo.DECIMAL, N, Tipo_1.Tipo.ENTERO, N],
    [N, N, N, N, N],
];

exports.modulo = [
    [Tipo_1.Tipo.DECIMAL, Tipo_1.Tipo.DECIMAL, N, Tipo_1.Tipo.DECIMAL, N],
    [Tipo_1.Tipo.DECIMAL, Tipo_1.Tipo.DECIMAL, N, Tipo_1.Tipo.DECIMAL, N],
    [N, N, N, N, N],
    [Tipo_1.Tipo.DECIMAL, Tipo_1.Tipo.DECIMAL, N, Tipo_1.Tipo.DECIMAL, N],
    [N, N, N, N, N],
];

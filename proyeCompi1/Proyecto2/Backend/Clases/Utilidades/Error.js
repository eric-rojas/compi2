"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error = void 0;
class Error {
    constructor(linea, columna, tipo, descripcion) {
        this.linea = linea;
        this.columna = columna;
        this.tipo = tipo;
        this.descripcion = descripcion;
    }
    toString() {
        return `→ Error ${this.tipo}, ${this.descripcion}. ${this.linea}:${this.columna}`;
    }
    getData() {
        return [String(this.tipo), this.descripcion, String(this.linea), String(this.columna)];
    }
}
exports.Error = Error;

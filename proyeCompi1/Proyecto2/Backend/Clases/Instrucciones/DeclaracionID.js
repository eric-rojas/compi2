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
        const valorEjecutado = this.valor ? this.valor.ejecutar(entorno) : { valor: null, tipo: this.tipo };
    
        if (valorEjecutado.tipo === this.tipo || valorEjecutado.tipo === null) {
            entorno.guardarVariable(this.id, valorEjecutado.valor, this.tipo, this.linea, this.columna);
        } else {
            console.error(`❌ Error de tipos al declarar ${this.id}: se esperaba ${this.tipo}, pero se obtuvo ${valorEjecutado.tipo}`);
        }
    
        console.log("✅ GUARDANDO:", this.id, "tipo:", this.tipo, "valor:", valorEjecutado.valor);
    }
    
}
exports.DeclaracionID = DeclaracionID;

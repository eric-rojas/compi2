"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LlamadaFUncion = void 0;
const Expresion_1 = require("../Abstractas/Expresion");
const Entorno_1 = require("../Entorno/Entorno");
const TipoExpresion_1 = require("../Utilidades/TipoExpresion");
const Bloque_1 = require("../Instrucciones/Bloque");
class LlamadaFUncion extends Expresion_1.Expresion {
    constructor(linea, columna, id, argumentos) {
        super(linea, columna, TipoExpresion_1.TipoExpresion.ARMITEMETICO);
        this.id = id;
        this.argumentos = argumentos;
    }
    ejecutar(entorno) {
        const funcion = entorno.getFuncion(this.id);
        if (funcion) {
            // Validar argumentos
            const entornoFuncion = new Entorno_1.Entorno(entorno, 'Funcion ' + this.id);
            // Validar la misma cantidad de argumentos
            if (this.argumentos.length === funcion.parametros.length) {
                var valor;
                var parametro;
                // Recorrer la lista de parametros/argumentos
                for (let i = 0; i < funcion.parametros.length; i++) {
                    valor = this.argumentos[i].ejecutar(entorno);
                    parametro = funcion.parametros[i];
                    // console.log('Parametro: ' + parametro.id + ' tipo: ' + parametro.tipo + ' valor: ' + valor.valor + ' tipo: ' + valor.tipo);
                    // Validar el tipo de dato del argumento
                    if (valor.tipo == parametro.tipo) {
                        entornoFuncion.guardarVariable(parametro.id, valor.valor, parametro.tipo, this.linea, this.columna);
                        continue;
                    }
                    // Error semántico - No coinciden los tipos de los argumentos
                    return null;
                }
                // Ejecutar el bloque de la funcion
                let ejecucion = new Bloque_1.Bloque(this.linea, this.columna, funcion.instrucciones).ejecutar(entornoFuncion);
                if (ejecucion) {
                    if (ejecucion.valor === TipoExpresion_1.TipoExpresion.RETORNAR) {
                        // console.log('Retorno de la funcion: ' + this.id + ' con valor: ' + ejecucion.valor);
                        return;
                    }
                    return ejecucion;
                }
                return null;
            }
            // Error semántico - No coinciden la cantidad de argumentos
            return null;
        }
        // Error semántico - Funcion no existe
        return null;
    }
}
exports.LlamadaFUncion = LlamadaFUncion;

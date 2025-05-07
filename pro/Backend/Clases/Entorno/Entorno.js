"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entorno = void 0;
const Salida_1 = require("../Utilidades/Salida");
const Simbolo_1 = require("./Simbolo");
const Tabla_1 = require("./Tabla");
const SimboloTabla_1 = require("./SimboloTabla");
const Objeto_1 = require("./Objeto");
class Entorno {
    constructor(anterior, nombre) {
        this.anterior = anterior;
        this.nombre = nombre;
        this.ids = new Map();
        this.funciones = new Map();
        this.objetos = new Map();
    }
    // === Guardar Variable ===
    guardarVariable(id, valor, tipo, linea, columna) {
        let entorno = this;
        if (!entorno.ids.has(id)) {
            // Guardar variable
            entorno.ids.set(id, new Simbolo_1.Simbolo(valor, id, tipo));
            // Insertamos en la tabla de simbolos
            Tabla_1.tablaSimbolos.push(new SimboloTabla_1.SimboloTabla(linea, columna, true, true, valor, tipo, id, entorno.nombre));
        }
        // Error semántico - Variable ya existe
    }
    // === Obtener Variable ===
    getVariable(id) {
        let entorno = this;
        while (entorno != null) {
            if (entorno.ids.has(id)) {
                return entorno.ids.get(id);
            }
            entorno = entorno.anterior;
        }
        // Error semántico - Variable no existe
        return null;
    }
    // === Actualizar Variable ===
    setVariable(id, valor) {
        let entorno = this;
        while (entorno != null) {
            if (entorno.ids.has(id)) {
                let simbolo = entorno.ids.get(id);
                simbolo.valor = valor;
                return;
            }
            entorno = entorno.anterior;
        }
    }
    // === GUARDAR OBJETO ===
    guardarObjeto(id, atributos) {
        let entorno = this;
        if (!entorno.objetos.has(id)) {
            // console.log(atributos)
            this.objetos.set(id, new Objeto_1.Objeto(id));
            this.guardarAtributo(id, atributos);
        }
        // Error semántico - Objeto ya existe
    }
    guardarAtributo(id, atributo) {
        let entorno = this;
        if (entorno.objetos.has(id)) {
            let objeto = entorno.objetos.get(id);
            for (let i = 0; i < atributo.length; i++) {
                // console.log(atributo[i])
                objeto.atributos.set(atributo[i].id, atributo[i]);
            }
        }
        // Error semántico - Objeto no existe
    }
    // === OBTENER OBJETO ===
    getObjeto(id) {
        let entorno = this;
        while (entorno != null) {
            if (entorno.objetos.has(id)) {
                console.log('Objeto encontrado: ' + id);
                console.log(entorno.objetos.get(id));
                return entorno.objetos.get(id);
            }
            entorno = entorno.anterior;
        }
        // Error semántico - Objeto no existe
        return null;
    }
    // === GUARDAR FUNCION ===
    guardarFuncion(id, funcion) {
        let entorno = this;
        if (!entorno.funciones.has(id)) {
            // Guardar Funcion
            // console.log('Guardando funcion: ' + id + ' en el entorno: ' + entorno.nombre)
            // console.log(funcion)
            entorno.funciones.set(id, funcion);
            // Insertamos en la tabla de simbolos
            Tabla_1.tablaSimbolos.push(new SimboloTabla_1.SimboloTabla(funcion.linea, funcion.columna, false, false, null, funcion.tipo, id, entorno.nombre));
        }
        // Error semántico - Funcion ya existe
    }
    // === OBTENER FUNCION ===
    getFuncion(id) {
        let entorno = this;
        while (entorno != null) {
            if (entorno.funciones.has(id)) {
                return entorno.funciones.get(id);
            }
            entorno = entorno.anterior;
        }
        // Error semántico - Funcion no existe
        return null;
    }
    setPrint(print) {
        Salida_1.salidasConsola.push(print);
    }
}
exports.Entorno = Entorno;

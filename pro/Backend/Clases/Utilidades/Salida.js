"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errores = exports.salidasConsola = void 0;
exports.getSalida = getSalida;
exports.getErrores = getErrores;
exports.limpiarSalidas = limpiarSalidas;
exports.salidasConsola = [];
exports.errores = [];
function getSalida() {
    var out = '';
    for (let i = 0; i < exports.salidasConsola.length; i++) {
        out += exports.salidasConsola[i];
        if (i < exports.salidasConsola.length - 1) {
            out += "\n";
        }
    }
    if (exports.errores.length > 0) {
        if (out != "") {
            out += "\n\n↳ ERRORES\n";
        }
        else {
            out += "↳ ERRORES\n";
        }
        for (var i = 0; i < exports.errores.length; i++) {
            out += exports.errores[i].toString();
            if (i < exports.errores.length - 1) {
                out += "\n";
            }
        }
    }
    return out;
}
function getErrores() {
    return exports.errores;
}
function limpiarSalidas() {
    exports.salidasConsola.splice(0, exports.salidasConsola.length);
    exports.errores.splice(0, exports.errores.length);
}

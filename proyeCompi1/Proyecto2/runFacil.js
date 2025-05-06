const fs = require('fs');
const parser = require('./Backend/Lenguaje/Parser');
const { Entorno } = require('./Backend/Clases/Entorno/Entorno');
const { limpiarSalidas, getSalida } = require('./Backend/Clases/Utilidades/Salida');

fs.readFile('./Inputs/Fácil1.ci', 'utf-8', (err, data) => {
    if (err) {
        console.error("❌ Error leyendo el archivo:", err);
        return;
    }

    try {
        const instrucciones = parser.parse(data);  // PARSEAR EL ARCHIVO
        const entornoGlobal = new Entorno(null, "Global");  // CREAR ENTORNO

        limpiarSalidas();  // LIMPIAR BUFFER DE SALIDA

        for (let instr of instrucciones) {
            if (instr != null && typeof instr.ejecutar === 'function') {
                instr.ejecutar(entornoGlobal);  // EJECUTAR INSTRUCCIÓN
            }
        }

        console.log("=== ✅ EJECUCIÓN COMPLETA ===");
        console.log(getSalida());  // IMPRIMIR LO QUE SE ACUMULÓ EN 'Salida.js'

    } catch (e) {
        console.error("❌ Error al analizar o ejecutar el código:");
        console.error(e.stack); // Mostrar toda la traza del error
    }

});

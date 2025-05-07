"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controlador = void 0;
// import { Env } from "../Classes/Env/Env";
// import { symTable } from '../Classes/Env/SymbolTable';
const Salida_1 = require("../Clases/Utilidades/Salida");
const Entorno_1 = require("../Clases/Entorno/Entorno");
const Tabla_1 = require("../Clases/Entorno/Tabla");
// import { AST,  ReturnAST } from "../Classes/Env/AST";
// import { TypeInst } from "../Classes/Utils/TypeInst";
class Controlador {
    running(req, res) {
        res.send('Interpreter is running!!!');
    }
    parserFile(req, res) {
        let file = req.body.file;
        let parser = require('../Lenguaje/Parser');
        var fs = require('fs');
        console.log('\x1Bc');
        console.log(file);
        fs.readFile(file, 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
                res.json({
                    console: err
                });
            }
            else {
                (0, Salida_1.limpiarSalidas)();
                Tabla_1.tablaSimbolos.splice();
                let instrucciones = parser.parse(data);
                const global = new Entorno_1.Entorno(null, 'Global');
                for (let instruccion of instrucciones) {
                    try {
                        instruccion.ejecutar(global);
                    }
                    catch (error) { }
                }
                var out = (0, Salida_1.getSalida)();
                console.log();
                console.log();
                console.log('\x1b[32mSimpleCode\x1b[0m');
                console.log(out);
                res.json({
                    console: out
                });
            }
        });
    }
    // public parser(req: Request, res: Response) {
    //     let code = req.body.code
    //     let parser = require('../Language/Parser')
    //     try {
    //         resetOuts()
    //         symTable.splice()
    //         let instructions = parser.parse(code)
    //         let ast: AST = new AST()
    //         const global: Env = new Env(null, 'Global')
    //         var dotAST: string =  'digraph G{\nnode[color="white" fontcolor="white"];\nedge[dir=none color="white"];\nbgcolor = "#0D1117";'
    //         dotAST += '\nnode_r[label="INSTRUCTIONS"];'
    //         var resultAST: ReturnAST
    //         for(let instruction of instructions) {
    //             try {
    //                 if(instruction.typeInst === TypeInst.INIT_FUNCTION) {
    //                     instruction.execute(global)
    //                     resultAST = instruction.ast(ast)
    //                     dotAST += '\n' + resultAST.dot
    //                     dotAST += `\nnode_r -> node_${resultAST.id};`
    //                 }
    //             }
    //             catch (error) {}
    //         }
    //         for(let instruction of instructions) {
    //             try {
    //                 if(instruction.typeInst !== TypeInst.INIT_FUNCTION) {
    //                     instruction.execute(global)
    //                     resultAST = instruction.ast(ast)
    //                     dotAST += '\n' + resultAST.dot
    //                     dotAST += `\nnode_r -> node_${resultAST.id};`
    //                 }
    //             }
    //             catch (error) {}
    //         }
    //         dotAST += '\n}'
    //         res_dotAST = dotAST
    //         res.json({
    //             console: getStringOuts()
    //         })
    //     }
    //     catch (error) {
    //         res.json({
    //             console: error
    //         })
    //     }
    // }
    // public getAST(req: Request, res: Response) {
    //     try {
    //         res.json({
    //             ast: res_dotAST
    //         })
    //     }
    //     catch (error) {
    //         res.json({
    //             ast: error
    //         })
    //     }
    // }
    getSymbolsTable(req, res) {
        try {
            res.json({
                table: Tabla_1.tablaSimbolos.simbolos
            });
        }
        catch (error) {
            res.json({
                table: error
            });
        }
    }
    getErrores(req, res) {
        try {
            res.json({
                errors: (0, Salida_1.getErrores)()
            });
        }
        catch (error) {
            res.json({
                errors: error
            });
        }
    }
}
exports.Controlador = Controlador;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Controlador_1 = require("../Controlador/Controlador");
const router = express_1.default.Router();
const interpreter = new Controlador_1.Controlador();
router.get('/', interpreter.running);
// router.post('/parser', interpreter.parser)
router.post('/parserFile', interpreter.parserFile);
// router.get('/getAST', interpreter.getAST)
router.get('/getSymbolsTable', interpreter.getSymbolsTable);
// router.get('/getErrors', interpreter.getErrors)
// router.get('/getTokens', interpreter.getTokens)
exports.default = router;

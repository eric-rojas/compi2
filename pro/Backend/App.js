"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Interpreter_1 = __importDefault(require("./Rutas/Interpreter"));
// import routerF from '../Rutas/Files'
const app = (0, express_1.default)();
const port = 3000;
let cors = require('cors');
app.use(cors());
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hola mundo');
});
app.use('/interpreter', Interpreter_1.default);
// app.use('/files', routerF)
app.listen(port, () => {
    try {
        return console.log(`Server is running in port ${port}`);
    }
    catch (error) {
        return console.error(error);
    }
});

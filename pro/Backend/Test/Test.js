var fs = require('fs')
var parser = require('../Lenguaje/Parser')
fs.readFile('../../Inputs/objetos.txt',(err,data) => {
    if(err) throw err
    let string = data.toString()
    console.log(parser.parse(string))
})
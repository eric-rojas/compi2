const fs = require('fs');
const parser = require('./Backend/Lenguaje/Parser');

fs.readFile('./Inputs/Fácil1.ci', 'utf-8', (err, data) => {
    if (err) throw err;
    try {
        const result = parser.parse(data);
        console.log('=== ✅ PARSE OK ===');
        console.log(JSON.stringify(result, null, 2));
    } catch (e) {
        console.error('=== ❌ ERROR EN PARSE ===');
        console.error(e.message);
    }
});

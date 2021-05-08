const fs = require('fs');
const path = require('path');

function validate(input, output, shift, action) {
    if (!['encode', 'decode'].includes(action)) {
        console.error('set action "-a encode" or "-a decode", please!');
        process.exit(-1);
    }
    if (!Number.isInteger(+shift)) {
        console.error('shift should be an integer');
        process.exit(-1);
    }
    if (input) {
        try {
            fs.accessSync(path.resolve(input), fs.constants.R_OK | fs.constants.F_OK);
        } catch (err) {
            console.error(`no access to file ${path.resolve(input)}  or file doesn't exist!`);
            process.exit(-1);
        }
    }
    if (output) {
        try {
            fs.accessSync(path.resolve(output), fs.constants.W_OK | fs.constants.F_OK);
        } catch (err) {
            console.error(`no access to file ${path.resolve(output)}  or file doesn't exist!`);
            process.exit(-1);
        }
    }
}

module.exports = validate;

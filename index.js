const path = require('path');
const fs = require('fs');
const { program } = require('commander');
const { pipeline } = require('stream');

const TransformStream = require('./src/transform-stream');
const validate = require('./src/validation');

program
    .storeOptionsAsProperties(false)
    .requiredOption('-s, --shift <shift>', 'a shift')
    .requiredOption('-a, --action <action>', 'an action encode/decode')
    .option('-i, --input <file>', 'an input file')
    .option('-o, --output <file>', 'an output file');
program.parse(process.argv);
const { shift, action, input, output } = program.opts();
validate(input, output, shift, action);
const myStream = new TransformStream(shift, action);
const inputStream = input ? fs.createReadStream(path.resolve(input)) : process.stdin;
const outputStream = output ? fs.createWriteStream(path.resolve(output), { flags: 'a' }) : process.stdout;
pipeline(inputStream, myStream, outputStream, err => {
    if (err) {
        console.error(`${err.code} we've got problem with your file!`);
        process.exit(-1);
    } else {
        console.log('Encoding succeeded.');
    }
});

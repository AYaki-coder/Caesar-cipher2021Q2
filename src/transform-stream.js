const CaesarCipher = require('./caesar-cipher-algorithm');
const { Transform } = require('stream');
class TransformStream extends Transform {
    constructor(shift, action) {
        super();
        this.obj = new CaesarCipher(shift, action);
    }
    _transform(chunk, encoding, callback) {
        try {
            const resultString = this.obj.encode(chunk.toString('utf8'));
            callback(null, resultString);
        } catch (err) {
            callback(err);
        }
    }
}

module.exports = TransformStream;

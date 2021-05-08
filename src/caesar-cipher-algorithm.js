class CaesarCipher {
    constructor(shift, action) {
        this.abcLength = 26;
        if (action === 'decode') {
            shift = this.abcLength - shift;
        }
        this.shift = shift >= 0 ? shift % this.abcLength : this.abcLength + (shift % this.abcLength);
    }

    encode(inputString) {
        const startAbcUppercase = 'A'.charCodeAt(0);
        const endAbcUppercase = 'Z'.charCodeAt(0);
        const startAbc = 'a'.charCodeAt(0);
        const endAbc = 'z'.charCodeAt(0);
        const newArr = [];

        inputString.split('').forEach(el => {
            if (el.charCodeAt(0) >= startAbcUppercase && el.charCodeAt(0) <= endAbcUppercase) {
                const newCharCode =
                    ((el.charCodeAt(0) - startAbcUppercase + this.shift) % this.abcLength) + startAbcUppercase;
                const newChar = String.fromCodePoint(newCharCode);
                newArr.push(newChar);
            } else if (el.charCodeAt(0) >= startAbc && el.charCodeAt(0) <= endAbc) {
                const newCharCode = ((el.charCodeAt(0) - startAbc + this.shift) % this.abcLength) + startAbc;
                const newChar = String.fromCodePoint(newCharCode);
                newArr.push(newChar);
            } else {
                newArr.push(el);
            }
        });

        return newArr.join('');
    }
}

module.exports = CaesarCipher;

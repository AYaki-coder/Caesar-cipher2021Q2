# Caesar-cipher2021Q2
## Task1 Caesar-cipher 

## Description
This package encodes and decodes a text from files or command line.

CLI tool should accept 4 options (short alias and full name):

**-s, --shift**: a shift

**-i, --input**: an input file

**-o, --output**: an output file

**-a, --action**: an action encode/decode

**Action** (encode/decode) and the **shift** are **required**, if one of them missed - an error should be shown, the process should exit with non-zero status code.

If the input file is missed - use stdin as an input source.

If the output file is missed - use stdout as an output destination.

If the input and/or output file is given but doesn't exist or you can't read it (e.g. because of permissions or it is a directory) - human-friendly error should be printed in stderr.

If passed params are fine the output (file or stdout) should contain encoded/decoded content of input (file or stdin).

For encoding/decoding use only the English alphabet, all other characters should be kept untouched.

## Installation

**install nodejs** and open your terminal

- Clone this repo:

    - `git clone https://github.com/AYaki-coder/Caesar-cipher2021Q2.git`

- Go to the cloned folder:

    - `cd ./Caesar-cipher2021Q2`

- Setup dependencies via:

    -   `npm install`

## Usage 

Create your input and output files. Write down the text you want to encode into input file.

- Use this command in a command line:

    - `$ node .index.js -a encode -s 7 -i ".\input.txt" -o ".\output.txt"`

- or without files:

    - `$ node .index.js -a encode -s 7`

input.txt This is secret. Message about "_" symbol!

output.txt Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!

Enjoy!




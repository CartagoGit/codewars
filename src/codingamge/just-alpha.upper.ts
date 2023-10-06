/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const S: string = readline();

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
const alphabet = /[A-Z]+/g;
const justAlphabet = S.match(alphabet)?.join('');
console.log(justAlphabet ?? '');

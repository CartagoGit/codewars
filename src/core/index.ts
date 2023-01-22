
import { getJacobstahlSequence, getJacobstahPosition, getPadovanSequence } from './../helpers/sequences';
import { getFibonacciSequence, getFibonacciIndex } from '../helpers/sequences';

// const result = getJacobstahlSequence(50);
const result = getFibonacciSequence(10);
// const result2 = getJacobstahPosition(49);
const result2 = getFibonacciIndex(9);
console.log("❗FINAL result ➽ ⏩", result);
console.log("❗result2 ➽ ⏩" , result2);

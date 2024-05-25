//* https://www.codewars.com/kata/61c49a1045dba2004e7acd1f/train/typescript
declare const exports: any;

export const quine = () => { return "export const quine = " + exports.quine.toString(); }

//* https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/typescript

export function duplicateEncode(word: string) {
    return word
      .toLowerCase()
      .split('')
      .map((value, index, array) =>
        array.some((v, i) => v === value && i !== index) ? ')' : '('
      )
      .join('');
  }

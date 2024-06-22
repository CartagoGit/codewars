
//* https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/train/typescript

export function sameCase(a: string, b: string): number {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const isUpperCase = (char: string) => alphabet.toUpperCase().includes(char);
    if([a, b].some((char) => !alphabet.includes(char.toLowerCase()))) return -1;
    else if (isUpperCase(a) === isUpperCase(b)) return 1;
    else return 0;
}

// * https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/typescript

export function abbrevName(name: string): string {
    // code away
    return name.split(' ').map((n) => n[0].toUpperCase()).join('.');
}
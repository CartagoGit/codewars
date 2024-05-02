//* https://www.codewars.com/kata/64fc03a318692c1333ebc04c/train/typescript

export function bestFriend(txt: string, a: string, b: string): boolean {
    return txt.split(a).length === txt.split(a + b).length;
}
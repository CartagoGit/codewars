//* https://www.codewars.com/kata/64fc03a318692c1333ebc04c/train/typescript

export function bestFriend(txt: string, a: string, b: string): boolean {
    const words = txt.split(' ').filter((word) => word.includes(a));
    for(let word of words){
        const letter = word.split('');
        for (let i = 0; i < letter.length; i++) {
            if(letter[i] === a && letter[i + 1] !== b) return false;
        }
    }
    return true;
}
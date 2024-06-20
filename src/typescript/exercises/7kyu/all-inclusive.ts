//* https://www.codewars.com/kata/5700c9acc1555755be00027e/train/typescript

export function containAllRots(str: string, arr: string[]): boolean {
    if(str === '') return true;
	for(let i = 0; i < str.length; i++) {
        if(!arr.includes(str.slice(i) + str.slice(0, i))) return false;
    }
    return true;
}

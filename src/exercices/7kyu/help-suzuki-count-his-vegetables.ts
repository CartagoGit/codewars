/**
 * * https://www.codewars.com/kata/56ff1667cc08cacf4b00171b/train/typescript
 */

export const initVegetables = () => {
    return countVegetables('');
}

export function countVegetables(s:string): [number,string][] {
    //your code here
    const arrayOfVegetablesNotSorted : [number, string][] = [];
    s.split(' ').forEach(vegetable => {
        const index = arrayOfVegetablesNotSorted[1].findIndex(vegetableNotSorted => vegetableNotSorted === vegetable)
        if(index === -1 ) arrayOfVegetablesNotSorted.push([1,vegetable])
        else arrayOfVegetablesNotSorted[]
    })
    return []
  }
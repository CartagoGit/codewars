/**
 * * https://www.codewars.com/kata/56ff1667cc08cacf4b00171b/train/typescript
 */

export const initVegetables = () => {
    return countVegetables('');
}

export function countVegetables(s:string): [number,string][] {
    //your code here
    let arrayOfVegetablesNotSorted : [number, string][] = [];
    let arrayCounter : number[] =[]
    let arrayNameVegetables : string [] = []  
    s.split(' ').forEach(vegetable => {
        const index = arrayNameVegetables.findIndex(vegetableName => vegetableName === vegetable)
        if(index === -1 ) {arrayNameVegetables.push(vegetable), arrayCounter.push(1)}
        else arrayCounter[index]++;
    })
    
    return []
  }
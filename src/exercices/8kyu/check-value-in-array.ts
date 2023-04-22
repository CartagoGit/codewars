export const initCheckValueInArray = () => {
    const result = check([66, 101], 66);
    return result;
}


export const check = (a: (number | string)[], x: number | string): boolean => {
    return a.includes(x);
  }

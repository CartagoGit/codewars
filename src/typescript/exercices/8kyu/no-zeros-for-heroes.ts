// * https://www.codewars.com/kata/570a6a46455d08ff8d001002/train/typescript

export function noBoringZeros(n: number): number {
    let chain = n.toString();
    while (chain.endsWith('0')) {
        chain = chain.slice(0, -1);
    }
  return Number(chain);
}
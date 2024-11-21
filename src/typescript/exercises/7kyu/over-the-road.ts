//* https://www.codewars.com/kata/5f0ed36164f2bc00283aed07/train/typescript

export function overTheRoad(address: number, n: number): number {
    const isEven = address % 2 === 0;
    const position = isEven ? address / 2 : (address + 1) / 2;
    const opositePosition = n + 1 - position;
    console.log({
        isEven,
        n,
        position,
        opositePosition
    })
    return opositePosition * 2;
}


console.log(overTheRoad(3, 3)) // 4
console.log(overTheRoad(2, 3)) // 5
console.log(overTheRoad(3, 5)) // 8
console.log(overTheRoad(7, 11)) // 16
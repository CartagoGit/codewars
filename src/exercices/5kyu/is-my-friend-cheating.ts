//* https://www.codewars.com/kata/5547cc7dcad755e480000004/train/typescript

export function removeNb(n: number): number[][] {
	let pairsExcluded: number[][] = [];
	for (let indexA = 1; indexA <= n; indexA++) {
		const sumA = (indexA / 2) * (2 + (indexA - 1)) - indexA;
		if (sumA === 0) continue;
		for (let indexB = 1; indexB <= n; indexB++) {
			const sumB = (indexB / 2) * (2 + (indexB - 1)) - indexB;
			if (sumB === 0) continue;
			console.log({
				indexA,
				indexB,
				sumA,
				sumB,
				suma: sumA + sumB,
				multi: indexA * indexB,
			});
			if (sumA + sumB === indexA * indexB)
				pairsExcluded.push([indexA, indexB]);
		}
	}
	return pairsExcluded;
}


export function removeNb2(n: number): [number, number][] {
    const totalSum = (n * (n + 1)) / 2; // Suma de todos los números del 1 al n
    const result: [number, number][] = [];
  
    for (let a = 1; a <= n; a++) {
      const b = (totalSum - a) / (a + 1);
      console.log({a,b, totalSum})
      if (Number.isInteger(b) && 1 <= b && b <= n) {
        result.push([a, b]);
      }
    }
  
    return result;
  }
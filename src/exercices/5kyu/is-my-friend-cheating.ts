//* https://www.codewars.com/kata/5547cc7dcad755e480000004/train/typescript

export function removeNb(n: number): number[][] {
	let pairsExcluded: number[][] = [];
	let sum = 0;
	for (let indexA = 1; indexA <= n; indexA++) {
		const sumA = (indexA / 2) * (2 + (indexA - 1)) - indexA;
    if(sumA === 0) continue;
		for (let indexB = 1; indexB <= n; indexB++) { 
			const sumB = (indexB / 2) * (2 + (indexB - 1)) - indexB;
      if(sumB === 0) continue;
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

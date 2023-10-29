//* https://www.codewars.com/kata/62f23d84eb2533004be50c0d/train/typescript

export function clock(n: number, referenceList: number[]): number[] {
	let clock: { value: number; rBit: boolean }[] = [];
	for (let reference of referenceList) {
		const index = clock.findIndex((item) => item.value === reference);
		if (index !== -1) clock[index].rBit = true;
		else {
			if (clock.length < n) {
				clock.push({ value: reference, rBit: true });
				continue;
			}
			let wasFound = false;
			for (let mem of clock) {
				if (!mem.rBit) {
					mem = {
						value: reference,
						rBit: true,
					};
					wasFound = true;
					break;
				} else mem.rBit = false;
			}
			if (!wasFound) {
				clock[0] = {
					value: reference,
					rBit: true,
				};
			}
		}
	}
	return clock.map((item) => item.value);
}

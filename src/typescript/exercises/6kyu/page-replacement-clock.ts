//* https://www.codewars.com/kata/62f23d84eb2533004be50c0d/train/typescript

export function clock(maxMemory: number, refList: number[]): number[] {
	let clock: { value: number; rBit: boolean }[] = [];
	let iterator = 0;
	for (let refIndex = 0; refIndex < refList.length; refIndex++) {
		const reference = refList[refIndex];
		console.log('START ->>', { reference, clock, iterator });
		const clockIndex = clock.findIndex((item) => item.value === reference);
		if (clockIndex !== -1) clock[clockIndex].rBit = true;
		else {
			if (clock.length < maxMemory) {
				clock.push({ value: reference, rBit: false });
				continue;
			}
		}
		iterator = iterator++ % maxMemory;
		console.log('<<-- END', { reference, clock, iterator });
	}
	const fullClock = [
		...clock.map((item) => item.value),
		...Array(maxMemory - clock.length).fill(-1),
	];
	return fullClock;
}

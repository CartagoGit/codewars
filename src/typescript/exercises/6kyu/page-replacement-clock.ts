//* https://www.codewars.com/kata/62f23d84eb2533004be50c0d/train/typescript

export function clock(maxMemory: number, refList: number[]): number[] {
	let clock: { value: number; rBit: boolean }[] = [];
	let iterator = 0;
	for (let refIndex = 0; refIndex < refList.length; refIndex++) {
		const reference = refList[refIndex];
		const clockIndex = clock.findIndex((item) => item.value === reference);
        // If reference is in clock
		if (clockIndex !== -1) {
			clock[clockIndex].rBit = true;
			continue;
		}
		// If clock is not full
        if (clock.length < maxMemory) {
            clock.push({ value: reference, rBit: false });
            iterator = ++iterator % maxMemory;
			continue;
		}
        // Check value in iterator position on clock until find a value with rBit = false
        while(true){
            const actualItem = clock[iterator];
            if(actualItem.rBit){
                actualItem.rBit = false;
            }else{
                actualItem.value = reference;
                iterator = ++iterator % maxMemory;
                break;
            }
            iterator = ++iterator % maxMemory;
        }
	}
	const fullClock = [
		...clock.map((item) => item.value),
		...Array(maxMemory - clock.length).fill(-1),
	];
	return fullClock;
}

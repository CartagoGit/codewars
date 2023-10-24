//* https://www.codewars.com/kata/6329d94bf18e5d0e56bfca77/train/typescript

export function lru(numMemory: number, referencesList: number[]): number[] {
	let memory: number[] = Array(numMemory).fill(-1);
	let lastReferences: number[] = [];

	for (let i = 0; i < referencesList.length; i++) {
		const reference = referencesList[i];
		if (!lastReferences.includes(reference)) {
			// If the reference is not in memory
			if (lastReferences.length >= numMemory) {
				// If memory is full, replace the least recently used page
				let leastRecentPage = lastReferences[0];
				let indexInMemory = memory.indexOf(leastRecentPage);
				memory[indexInMemory] = reference;
				lastReferences.shift();
			} else {
				// If memory is not full, add the reference to the first available slot
				let firstAvailableSlot = memory.indexOf(-1);
				if (firstAvailableSlot !== -1)
					memory[firstAvailableSlot] = reference;
			}
		}
		// If the reference is in memory, move it to the end of the list
		else lastReferences = lastReferences.filter((ref) => ref !== reference);
		lastReferences.push(reference);
	}
	return memory;
}

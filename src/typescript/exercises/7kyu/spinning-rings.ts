//* https://www.codewars.com/kata/59afff65f1c8274f270020f5/train/typescript

export function spinningRings(innerMax: number, outerMax: number): number {
	let numberOfSpinsTillRingsAreEqual = 1;
	const nextInner = (val: number) => (val-- < 0 ? innerMax : val--);
	const nextOuter = (val: number) => (val++ > outerMax ? 0 : val++);
	let [inner, outer] = [0, 0];
	do {
        console.log({innerMax, outerMax, inner, outer});
		numberOfSpinsTillRingsAreEqual++;
		inner = nextInner(inner);
		outer = nextOuter(outer);
	} while (inner !== outer);
	return numberOfSpinsTillRingsAreEqual;
}

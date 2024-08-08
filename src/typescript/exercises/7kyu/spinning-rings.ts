//* https://www.codewars.com/kata/59afff65f1c8274f270020f5/train/typescript

export function spinningRings(innerMax: number, outerMax: number): number {
	let numberOfSpinsTillRingsAreEqual = 0;
	const nextInner = (val: number) => (val - 1 < 0 ? innerMax : val - 1);
	const nextOuter = (val: number) => (val + 1 > outerMax ? 0 : val + 1);
	let [inner, outer] = [0, 0];
	do {
		numberOfSpinsTillRingsAreEqual++;
		inner = nextInner(inner);
		outer = nextOuter(outer);
	} while (inner !== outer);
	return numberOfSpinsTillRingsAreEqual;
}

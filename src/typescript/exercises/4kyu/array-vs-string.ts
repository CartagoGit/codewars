//* https://www.codewars.com/kata/582087e5b81f7063a7000242/train/typescript

type Kind = 'increase' | 'decrease' | 'equal' | 'none';
type DataKind = { kind: Kind; value: number };
type RangeKind = {
	kind: Kind;
	value: number;
	range: { init: number; final: number };
	startNumber: number;
};

const getDataKind = (a: number, b: number): DataKind => {
	if (a < b) return { kind: 'increase', value: b - a };
	else if (a > b) return { kind: 'decrease', value: a - b };
	else if (a === b) return { kind: 'equal', value: a ?? b };
	else return { kind: 'none', value: 0 };
};

const getStringArray = (arg: RangeKind) => {
	if (arg.kind === 'equal') {
		return `${arg.value}:${arg.range.final - arg.range.init + 1}`;
	} else {
		return `${arg.startNumber}:${arg.range.final + 1 - arg.range.init}${
			arg.kind === 'increase' ? '+' : '-'
		}${arg.value}`;
	}
};
export function arrayToString(arr: number[]): string {
	console.log({ arr });
	if (arr.length < 3) return arr.join(',');
	let actual: RangeKind = {
		kind: 'equal',
		value: 0,
		range: { init: 0, final: 0 },
		startNumber: arr[0],
	};
	let isNewRange = true;
	let rangesKinds: RangeKind[] = [];
	for (let i = 1; i < arr.length; i++) {
		const { kind, value } = getDataKind(arr[i - 1], arr[i]);
		if (isNewRange) {
			actual = {
				kind,
				value,
				range: { init: i - 1, final: i },
				startNumber: arr[i - 1],
			};
			isNewRange = false;
			if (i === arr.length - 1) rangesKinds.push(actual);
			continue;
		}
		if (kind === 'none') return arr.join(',');
		const { kind: actualKind, value: actualValue } = actual;
		actual.range.final = i;
		if (i === arr.length - 1) rangesKinds.push(actual);

		if (actualKind !== kind || actualValue !== value) {
			rangesKinds.push(actual);
			isNewRange = true;
		}
	}
	console.log(1, {
		actual,
		rangesKinds,
		ranges: rangesKinds.map((range) => range.range),
	});

	if (rangesKinds.length === 1) return getStringArray(rangesKinds[0]);
	let result: string[] = [];
	for (let j = 1; j < rangesKinds.length; j++) {
		const prev = rangesKinds[j - 1];
		const now = rangesKinds[j];
		if (prev.range.final >= now.range.init) {
			if (
				now.range.final - now.range.init - 1 < 3 ||
				now.kind === 'equal'
			)
				rangesKinds[j - 1].range.final--;
			else rangesKinds[j].range.init++;
		}
		result.push(getStringArray(rangesKinds[j - 1]));
		if (j === rangesKinds.length - 1)
			result.push(getStringArray(rangesKinds[j]));
	}
	console.log(2, {
		actual,
		rangesKinds,
		ranges: rangesKinds.map((range) => range.range),
	});
	return result.join(',');
}

export function stringToArray(str: string): number[] {
	throw new Error('TODO: stringToArray');
}

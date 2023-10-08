//* https://www.codewars.com/kata/582087e5b81f7063a7000242/train/typescript

type Kind = 'increase' | 'decrease' | 'equal';
type DataKind = { kind: Kind; difference: number };
type RangeKind = DataKind & {
	range: { init: number; final: number };
	startNumber: number;
};

const getDataKind = (a: number, b: number): DataKind => {
	if (a < b) return { kind: 'increase', difference: b - a };
	else if (a > b) return { kind: 'decrease', difference: a - b };
	else return { kind: 'equal', difference: a ?? b };
};

const getStringArray = (arg: RangeKind) => {
	return (
		`${arg.startNumber}:${arg.range.final - arg.range.init + 1}` +
		(arg.kind !== 'equal'
			? `${arg.kind === 'increase' ? '+' : '-'}${arg.difference}`
			: '')
	);
};
export function arrayToString(arr: number[]): string {
	console.log(10,{ arr });
	if (arr.length < 3) return arr.join(',');
	let actual: RangeKind = {
		...getDataKind(arr[0], arr[1]),
		range: { init: 0, final: 1 },
		startNumber: arr[0],
	};
	let rangesKinds: RangeKind[] = [];
	for (let i = 2; i < arr.length; i++) {
		const { kind: actualKind, difference: actualDifference } = getDataKind(
			arr[i - 1],
			arr[i]
		);
		const { kind: prevKind, difference: prevDifference } = actual;
		const isLast = i === arr.length - 1;
		const areDifferent =
			prevKind !== actualKind || prevDifference !== actualDifference;
		actual.range.final = i;
		if (isLast || areDifferent) {
			if (i === 2) return arr.join(',');

			if (actual.range.final - actual.range.init < 2) i--;
			rangesKinds.push(actual);

			actual = {
				kind: actualKind,
				difference: actualDifference,
				range: { init: i, final: i },
				startNumber: arr[i],
			};
		}
	}

	console.log(1, {
		actual,
		rangesKinds,
		ranges: rangesKinds.map((range) => range.range),
	});
	rangesKinds = rangesKinds.filter(
		(range) => range.range.final - range.range.init > 1
	);
	if (rangesKinds.length === 0) return arr.join(',');
	if (rangesKinds.length === 1) return getStringArray(rangesKinds[0]);
	let result: string[] = [];
    console.log({rangesKinds});
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
        console.log({j});
	}
	console.log(2, { result });
	return result.join(',');
}

export function stringToArray(str: string): number[] {
	throw new Error('TODO: stringToArray');
}

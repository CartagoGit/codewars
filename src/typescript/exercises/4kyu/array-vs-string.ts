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
		if (areDifferent || isLast) {
			if (i === 2) return arr.join(',');
			if (isLast) {
				rangesKinds.push({
					...actual,
					range: { init: actual.range.init, final: i },
				});
				break;
			}
			rangesKinds.push({
				...actual,
				range: { init: actual.range.init, final: i - 1 },
			});
			i--;
			actual = {
				kind: actualKind,
				difference: actualDifference,
				range: { init: i, final: i },
				startNumber: arr[i],
			};
		}
	}

	rangesKinds = rangesKinds.filter(
		(range) => range.range.final - range.range.init > 1
	);
	if (rangesKinds.length === 0) return arr.join(',');
	if (rangesKinds.length === 1) return getStringArray(rangesKinds[0]);
	let result: string[] = [];
	for (let j = 1; j < rangesKinds.length; j++) {
		const prev = rangesKinds[j - 1];
		const now = rangesKinds[j];
		if (prev.range.final >= now.range.init) {
			if (now.range.final - now.range.init < 3 || now.kind === 'equal')
				rangesKinds[j - 1].range.final--;
			else {
				rangesKinds[j].range.init++;
				rangesKinds[j].startNumber = arr[rangesKinds[j].range.init];
			}
		}
		result.push(getStringArray(rangesKinds[j - 1]));
		if (j === rangesKinds.length - 1)
			result.push(getStringArray(rangesKinds[j]));
	}

	return result.join(',');
}

export function stringToArray(str: string): number[] {
	console.log({ str });
	const initArray = str.split(',');
	const arrayResults: number[][] = initArray.map((chain) => {
		// const separator = /(-?\d+):(\d+)([+\-]\d+)?/g;
		const separator = /(-?\d+)?:(\d+)?([+\-]\d+)?/g;
		const matchResult = [...chain.matchAll(separator)];
		if (matchResult.length === 0) return [Number(chain)];

		const [[_, value1, value2, value3]] = matchResult;
		console.log({ _, value1, value2, value3 });
		const kind = value3
			? value3.includes('+')
				? 'increase'
				: 'decrease'
			: 'equal';
		const startNumber = Number(value1);
		const times = Number(value2);
		const difference = Number(value3 ?? '0');
		let values: number[] = [];
		if (kind === 'equal') values = Array(times).fill(startNumber);
		else {
			for (let i = 0; i < times; i++) {
				values.push(startNumber + difference * i);
			}
		}
		return values;
	});
	return arrayResults.flat();
}

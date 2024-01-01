// https://www.codewars.com/kata/51f9d93b4095e0a7200001b8/train/typescript

export function howManyLightsabersDoYouOwn(name?: any): number {
	const options = {
		Zach: 18,
		default: 0,
	};
	if (typeof name !== 'string') return options.default;
	return options[name as keyof typeof options] ?? options.default;
}

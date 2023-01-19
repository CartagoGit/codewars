export const initMixbonacci = () => {
	const result = mixbonacci([], 3);
	return result;
};

const patterns = {
	fib: {
		name: "fibonacci",
		resolver: () => {},
	},
	pad: {
		name: "padovan",
		resolver: () => {},
	},
	jac: {
		name: "jacobstahl",
		resolver: () => {},
	},
	pel: {
		name: "pell",
		resolver: () => {},
	},
	tri: {
		name: "tribonacci",
		resolver: () => {},
	},
	tet: {
		name: "tetranacci",
		resolver: () => {},
	},
};

export function mixbonacci(pattern: string[], length: number): number[] {
	if (pattern.length === 0 || length === 0) return [];

	return [];
}

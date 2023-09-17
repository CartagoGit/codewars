export const divisors = (n: number) => {
	let result = 0;
	for (let i = 1; i <= n; i++) {
		if (n % i === 0) result++;
	}
	return result;
};

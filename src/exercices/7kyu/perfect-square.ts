export const initPerfectSquare = () => {
	const result = isSquare(0);
	return result;
};

export default function isSquare(n: number): boolean {
	for (let i = 0; i <= n; i++) {
		if (i * i === n) return true;
	}
	return false; // fix me
}

export const initPerfectSquare = () => {
	const result = isSquare(0);
	return result;
};

export default function isSquare(n: number): boolean {
	return Number.isInteger(Math.sqrt(n));
}

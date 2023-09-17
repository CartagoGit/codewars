export const initLostWithoutMap = () => {
	return maps([9]);
};

export function maps(x: number[]): number[] {
	return x.map((value) => value * 2);
}

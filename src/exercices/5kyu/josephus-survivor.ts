export const initJosephusSurvivor = () => {
	return josephusSurvivor(7, 3);
};

export const josephusSurvivor = (n: number, k: number): number => {
	const survivors = Array.from({ length: n }, (_, i) => i + 1);
    console.log(survivors)
    return 0;
};

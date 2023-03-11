export const initJosephusSurvivor = () => {
	// return josephusSurvivor(11, 19);
	return josephusSurvivor(7, 300);
};

export const josephusSurvivor = (n: number, k: number): number => {
	if (n < 1 || k < 1) throw new Error("Invalid input");
	let survivors = Array.from({ length: n }, (_, i) => i + 1);
	k = k - 1;
	let position = k;
    while (position >= survivors.length) {
        position = position - survivors.length;
    }
	while (survivors.length > 1) {
		survivors.splice(position, 1);
		position = position + k;
		while (position >= survivors.length) {
			position = position - survivors.length;
		}
	}
	return survivors[0];
};



export const initDigitalRoot = () => {
	return digitalRoot(232);
};

export const digitalRoot = (n: number): number => {
	while (n >= 10) {
		n = n
			.toString()
			.split("")
			.map((value) => Number(value))
			.reduce((accumulator, num) => accumulator + num);
	}
	return n;
};

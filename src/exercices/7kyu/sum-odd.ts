export const initSumOdds = () => rowSumOddNumbers(13);

export const rowSumOddNumbers = (n: number): number => {
    //* Calculate mid row number
	const midNum = n * n;
    //* Calculate the first number of the row
	const initNum = midNum - n + 1;
	let result = 0;
	for (let i = 0; i < n; i++) {
        //* Calculate the next number of the row
		const nextSum = initNum + 2 * i;
        // * And accumulate the result
		result = nextSum + result;
	}
	return result;
};

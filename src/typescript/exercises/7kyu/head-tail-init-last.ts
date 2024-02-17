// https://www.codewars.com/kata/54592a5052756d5c5d0009c3/train/typescript

export const head = (arr: number[]) => {
	return arr[0];
};

export const tail = (arr: number[]) => {
	return arr.slice(1);
};

export const init = (arr: number[]) => {
	return arr.slice(0, -1);
};

export const last = (arr: number[]) => {
	return arr[arr.length - 1];
};

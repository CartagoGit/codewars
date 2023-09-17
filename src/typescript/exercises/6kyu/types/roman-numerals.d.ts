declare global {
	interface Number {
		[K: string]: number[] | undefined;
	}
}

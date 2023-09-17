export const initSentenceSmash = () =>
	smash(["hello", "world", "this", "is", "great"]);

export const smash = (words: string[]): string => words.join(" ");

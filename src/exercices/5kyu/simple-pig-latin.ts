export const pigIt = (a: string, finallyChars: string = "ay"): string => {
	const specialChars = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
	return a
		.split(" ")
		.map((word) =>
			word.split("").some((letter) => specialChars.test(letter))
				? word
				: !word
				? word
				: (word + word[0] + finallyChars).slice(1)
		)
		.join(" ");
};

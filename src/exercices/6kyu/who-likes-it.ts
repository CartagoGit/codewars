export const initWhoLikesIt = (): string => {
	return likes(["pedro", "maria", "laura", "olga"]);
};

export const likes = (persons: string[]): string => {
	const suffix: string = persons.length <= 1 ? "likes this" : "like this";
	const numPersons = persons.length;
	if (numPersons > 3)
		persons = [persons[0], persons[1], numPersons - 2 + " others"];

	const names =
		numPersons === 0
			? "no one"
			: new Intl.ListFormat("en-GB").format(persons);
	return `${names} ${suffix}`;
};

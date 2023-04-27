export const areYouPlayingBanjo = (name: string): string =>
	name +
	(name[0].toLowerCase() === "r" ? " plays" : " does not play") +
	" banjo";

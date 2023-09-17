export const areYouPlayingBanjo = (name: string): string =>
	name +
	(name.toLowerCase().startsWith("r") ? " plays" : " does not play") +
	" banjo";

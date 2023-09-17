export function humanReadable(seconds: number): string {
	let minutes: number = Math.floor(seconds / 60);
	let hours: number = Math.floor(minutes / 60);
	seconds = seconds % 60;
	minutes = minutes % 60;
	const readable =
		(hours < 10 ? "0" + hours : hours.toString().slice(-2)) +
		":" +
		(minutes < 10 ? "0" + minutes : minutes.toString()) +
		":" +
		(seconds < 10 ? "0" + seconds : seconds.toString());

	return readable;
}

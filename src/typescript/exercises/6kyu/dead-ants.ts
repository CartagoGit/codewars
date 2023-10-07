//* https://www.codewars.com/kata/57d5e850bfcdc545870000b7/train/typescript

export function deadAntCount(ants: string | null): number {
	if (!ants) return 0;
	const partsBodyAnts = ants.replace(/ant/g, ' ');
	const deadAnts = Math.max(
		partsBodyAnts.match(/a/g)?.length ?? 0,
		partsBodyAnts.match(/n/g)?.length ?? 0,
		partsBodyAnts.match(/t/g)?.length ?? 0
	);
	return deadAnts;
}

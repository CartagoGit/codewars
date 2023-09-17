export const initBestTravel = () => {
	return chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87]);
};

export const chooseBestSum = (
	t: number, // maximum distance
	k: number, //number visitis
	ls: number[] // distances
): number | null => {
	if (ls.length < k) return null;

	const possibleSums = roamDistances({
		possibleSums: [],
		index: 0,
		distances: ls,
		numVisits: k,
		maxDistance: t,
		listDistances: [],
	});

	return possibleSums.length === 0 ? null : Math.max(...possibleSums);
};

export const roamDistances = (data: {
	possibleSums: number[];
	index: number;
	distances: number[];
	numVisits: number;
	maxDistance: number;
	listDistances: number[];
}) => {
	let {
		possibleSums,
		index,
		distances,
		numVisits,
		maxDistance,
		listDistances,
	} = data;
	for (let i = index; i < distances.length; i++) {
		if (listDistances?.length === numVisits - 1) {
			listDistances.push(distances[i]);
			const sum = listDistances.reduce((a, b) => a + b, 0);
			if (sum <= maxDistance) possibleSums.push(sum);
			listDistances.pop();
			continue;
		} else {
			listDistances.push(distances[i]);
			roamDistances({
				possibleSums,
				index: i + 1,
				distances,
				numVisits,
				maxDistance,
				listDistances,
			});
		}
		listDistances.pop();
	}
	return possibleSums;
};

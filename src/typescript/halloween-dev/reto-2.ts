//* https://www.halloween.dev/es/retos/2024/2

function battleHorde(zombies: string, humans: string) {
	const results = {
		zombies: 0,
		humans: 0,
	};
	for (let i = 0; i < zombies.length; i++) {
		const zombie = Number(zombies[i]);
		const human = Number(humans[i]);
		const diff = Math.abs(zombie - human);
		if (zombie > human) results.zombies += diff;
		else if (zombie < human) results.humans += diff;
	}
	const { zombies: totalZombies, humans: totalHumans } = results;
	const diff = Math.abs(totalZombies - totalHumans);
	if (totalZombies > totalHumans) return diff + 'z';
	if (totalZombies < totalHumans) return diff + 'h';
	return 'x';
}

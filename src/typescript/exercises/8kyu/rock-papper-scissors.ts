//* https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/typescript

// type Possibility =( "rock" | "paper" | "scissors");
// type Result = "Player 1 won!" | "Player 2 won!" | "Draw!";

// export const rps = (p1: Possibility, p2: Possibility): Result => {
// 	if (p1 === p2) return "Draw!";
// 	const cases = {
// 		rock: (p2: Possibility): Result =>
// 			p2 === "scissors" ? "Player 1 won!" : "Player 2 won!",
// 		paper: (p2: Possibility): Result =>
// 			p2 === "rock" ? "Player 1 won!" : "Player 2 won!",
// 		scissors: (p2: Possibility): Result =>
// 			p2 === "paper" ? "Player 1 won!" : "Player 2 won!",
// 	};
// 	return cases[p1](p2);
// };

// export const rps = (p1: string, p2: string): string => {
// 	const possibilities = ["rock", "paper", "scissors"];
// 	const p1Index = possibilities.indexOf(p1);
// 	const p2Index = possibilities.indexOf(p2);
// 	const result = (p1Index - p2Index + 3) % 3;
// 	return result === 0 ? "Draw!" : `Player ${result === 1 ? 1 : 2} won!`;
// };

export const rps = (p1: string, p2: string): string => {
	const winnerVsLoser: Record<string, string> = {
		rock: "scissors",
		paper: "rock",
		scissors: "paper",
	};
	if (p1 === p2) return "Draw!";
	return `Player ${winnerVsLoser[p1] === p2 ? "1" : "2"} won!`;
};

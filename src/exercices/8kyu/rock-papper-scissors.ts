//* https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/typescript

type Possibility =( "rock" | "paper" | "scissors");
type Result = "Player 1 won!" | "Player 2 won!" | "Draw!";

export const rps = (p1: Possibility, p2: Possibility): Result => {
	if (p1 === p2) return "Draw!";
	const cases = {
		rock: (p2: Possibility): Result =>
			p2 === "scissors" ? "Player 1 won!" : "Player 2 won!",
		paper: (p2: Possibility): Result =>
			p2 === "rock" ? "Player 1 won!" : "Player 2 won!",
		scissors: (p2: Possibility): Result =>
			p2 === "paper" ? "Player 1 won!" : "Player 2 won!",
	};
	return cases[p1](p2);
};

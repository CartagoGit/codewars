//* https://www.codewars.com/kata/5b432bdf82417e3f39000195/train/typescript

type PongResult = 'hit' | 'miss' | 'won' | 'over';
type Player = 'player1' | 'player2';

export class Pong {
	public maxScore: number;

    public 

	private _scores: Record<Player, number> = {
		player1: 0,
		player2: 0,
	};
	private _playerTurn: Player = 'player1';
	private _posibleResults: Record<PongResult, string> = {
		hit: 'Player X has hit the ball!',
		miss: 'Player X has missed the ball!',
		won: 'Player X has won the game!',
		over: 'Game Over!',
	};

	constructor(_maxScore: number) {
		this.maxScore = _maxScore;
	}

	public play(ballPos: number, playerPos: number): string {
		return '';
	}
}

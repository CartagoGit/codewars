import { min } from './../8kyu/min-max';
//* https://www.codewars.com/kata/5b432bdf82417e3f39000195/train/typescript

type PongResult = 'hit' | 'miss' | 'won' | 'over';
type Player = 'player1' | 'player2';

export class Pong {
	public maxScore: number;

	private _paddleSize = 7;
	private _ballSize = 1;
	private _playerTurn: Player = 'player1';

	private _scores: Record<Player, number> = {
		player1: 0,
		player2: 0,
	};
	private _posibleResults: Record<PongResult, () => string> = {
		hit: () => `Player ${this._playerTurn} has hit the ball!`,
		miss: () => `Player ${this._playerTurn} has missed the ball!`,
		won: () => `Player ${this._playerTurn} has won the game!`,
		over: () => 'Game Over!',
	};

	constructor(
		private _maxScore: number,
		private _options?: {
			paddleSize?: number;
			ballSize?: number;
			starterPlayer?: Player;
		}
	) {
		const { paddleSize, ballSize, starterPlayer } = _options ?? {};
		this.maxScore = _maxScore;
		this._paddleSize = paddleSize ?? this._paddleSize;
		this._ballSize = ballSize ?? this._ballSize;
		this._playerTurn = starterPlayer ?? this._playerTurn;
	}

	public play(ballPos: number, playerPos: number): string {
		const middlePaddle = this._paddleSize / 2;
		const middleBall = Math.ceil(this._ballSize / 2);
		const rangePlayer = {
			min: playerPos - middlePaddle,
			max: playerPos + middlePaddle,
		};
		const rangeBall = {
			min: ballPos - this._ballSize - middleBall - 1,
			max: ballPos + this._ballSize + middleBall - 1,
		};
		if (
			rangeBall.max >= rangePlayer.min &&
			rangeBall.min <= rangePlayer.max
		) {
			return this._posibleResults.hit();
		} else if (
			rangeBall.max < rangePlayer.min &&
			rangeBall.min > rangePlayer.max
		) {
			return this._posibleResults.miss();
		}
		return '';
	}
}

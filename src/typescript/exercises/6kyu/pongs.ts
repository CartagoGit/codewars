//* https://www.codewars.com/kata/5b432bdf82417e3f39000195/train/typescript

type PongResult = 'hit' | 'miss' | 'won' | 'over';
type Player = 'player1' | 'player2';

export class Pong {
	public maxScore: number;
	private _scores: Record<Player, number> = {
		player1: 0,
		player2: 0,
	};

	private _paddleSize = 7;
	private _ballSize = 1;
	private _playerTurn: Player = 'player1';
	private _isFinished = false;

	private readonly _numPlayer: Record<Player, number> = {
		player1: 1,
		player2: 2,
	};
	private readonly _posibleResults = {
		hit: (player?: Player) =>
			`Player ${
				this._numPlayer[player ?? this._playerTurn]
			} has hit the ball!`,
		miss: (player?: Player) =>
			`Player ${player ?? this._playerTurn} has missed the ball!`,
		won: (player: Player) => `Player ${player} has won the game!`,
		over: () => 'Game Over!',
	};

	constructor(
		_maxScore: number,
		_options?: {
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
		console.log({ ballPos, playerPos, playerTurn: this._playerTurn });
		if (this._isFinished) return this._posibleResults.over();
		// Calculate if ball hit the paddle
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
        console.log({rangePlayer, rangeBall});
		let hit = false;
		if (
			rangeBall.max >= rangePlayer.min &&
			rangeBall.min <= rangePlayer.max
		) {
			hit = true;
		}

		// Get the result
		let message = '';
		const opositePlayer =
			this._playerTurn === 'player1' ? 'player2' : 'player1';
		if (!hit) {
			this._scores[opositePlayer]++;
			if (this._scores[opositePlayer] >= this.maxScore) {
				this._isFinished = true;
				message = this._posibleResults.won(opositePlayer);
			} else message = this._posibleResults.miss(opositePlayer);
		} else message = this._posibleResults.hit();
		this._playerTurn = opositePlayer;
		return message;
	}
}

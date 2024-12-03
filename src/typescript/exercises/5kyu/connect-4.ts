//* https://www.codewars.com/kata/586c0909c1923fdb89002031/train/typescript

type IPlayer = 1 | 2;
type IPosition = { row: number; col: number };
type IDirections =
	| 'down'
	| 'left'
	| 'right'
	| 'upRight'
	| 'upLeft'
	| 'downRight'
	| 'downLeft';

export class Connect4 {
	// ANCHOR : Properties
	public board = Array.from({ length: 6 }, () =>
		Array.from({ length: 7 }, () => 0)
	);

	public playerTurn: IPlayer = 1;

	public isGameFinished = false;

	// ANCHOR: Constructor

	constructor() {}

	// ANCHOR: Methods

	play(col: number): string {
		if (this.isGameFinished) return 'Game has finished!';
		let lastPiece: IPosition;
		for (let row = 0; row < this.board[0].length; row++) {
			if (this.board[row][col] !== 0) {
				if (row === this.board[0].length - 1) return 'Column full!';
				continue;
			}
			this.board[row][col] = this.playerTurn;
			lastPiece = { row, col };
			break;
		}
		const isPlayerWins = this._checkWin(lastPiece!);
		if (isPlayerWins) return `Player ${this.playerTurn} wins!`;
		const result = `Player ${this.playerTurn} has a turn`;
		this._changePlayerTurn();
		return result;
	}

	private _changePlayerTurn(): void {
		this.playerTurn = this.playerTurn === 1 ? 2 : 1;
	}

	private _checkWin(lastPiece: IPosition): boolean {
		const directions: Record<IDirections, IPosition> = {
			upLeft: { row: -1, col: -1 },
			left: { row: 0, col: -1 },
			downLeft: { row: 1, col: -1 },
			down: { row: 1, col: 0 },
			downRight: { row: 1, col: 1 },
			right: { row: 0, col: 1 },
			upRight: { row: -1, col: 1 },
		};
	}
}

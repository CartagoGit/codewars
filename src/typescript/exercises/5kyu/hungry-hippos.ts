//* https://www.codewars.com/kata/590300eb378a9282ba000095/train/typescript

export class Game {
	public readonly board: number[][];
	constructor(board: number[][]) {
		this.board = board;
	}

	public play(): number {
		let leaps = 0;
		for (let i = 0; i < this.board.length; i++) {
			for (let j = 0; j < this.board[i].length; j++) {
				const current = this.board[i][j];
				if ([-1, 0].includes(current)) continue;
				leaps++;
				this._checkGroupLeap({ row: i, col: j });
			}
		}
		return leaps;
	}

	private _checkGroupLeap(data: { row: number; col: number }): void {
		const { row, col } = data;
		if (
			row < 0 ||
			row >= this.board.length ||
			col < 0 ||
			col >= this.board[row].length
		) {
			return;
		}
		const current = this.board[row][col];
		if ([-1, 0].includes(current)) return;

		this.board[row][col] = -1;
		this._checkGroupLeap({ row: row + 1, col });
		this._checkGroupLeap({ row: row - 1, col });
		this._checkGroupLeap({ row, col: col + 1 });
		this._checkGroupLeap({ row, col: col - 1 });
	}
}

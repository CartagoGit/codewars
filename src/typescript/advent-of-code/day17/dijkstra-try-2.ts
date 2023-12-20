import { INPUT_DAY_17, INPUT_EXAMPLE_17 } from './input';

const directions = ['up', 'down', 'left', 'right'] as const;
type Direction = (typeof directions)[number];

interface AdjacentVertex {
	name: string;
	weight: number;
	position: Position;
	direction: Direction;
	timesSameDirection: number;
}

interface Position {
	x: number;
	y: number;
}

//!! INIT
export const initDay17 = (): number => {
	// return exercise(INPUT_DAY_17);
	return exercise(INPUT_EXAMPLE_17);
};

const exercise = (input: string): number => {
	const lavaMap = input.split('\n').map((line) =>
		line
			.trim()
			.split('')
			.map((char) => Number(char.trim()))
	);
	return new Dijkstra({ chart: lavaMap }).findShortestPath();
};


class Vertex {
	public readonly position: Position;
	public readonly adjacentVertices: AdjacentVertex[];
	public readonly chart: number[][];
	public readonly weight: number;
	public readonly name: string;
	public lastDirection: Direction | undefined = undefined;
	public timesSameDirection = 1;

	constructor(data: {
		position: Position;
		weight: number;
		chart: number[][];
	}) {
		const { position, weight, chart } = data;
		this.position = position;
		this.weight = weight;
		this.chart = chart.map((row) => [...row]);
		this.adjacentVertices = this._getAdjacentVertices();
		this.name = this._getName();
	}

	private _getName = (): string => {
		return `${this.position.y},${this.position.x}`;
	};

	private _getAdjacentVertices(): AdjacentVertex[] {
		const matrix = this.chart;
		let adjacent: AdjacentVertex[] = [];
		let x = this.position.x;
		let y = this.position.y;

		const maxInDirection = 3;
		for (let index = 1; index <= maxInDirection; index++) {
			const minusX = x - index;
			const plusX = x + index;
			const minusY = y - index;
			const plusY = y + index;
			if (minusX >= 0) {
				const direction = 'left';
				let weight = 0;
				for (let i = 1; i <= index; i++) {
					weight += matrix[y][x - i];
				}
				adjacent.push({
					name: `${y},${minusX}`,
					weight,
					position: { x: minusX, y },
					direction,
					timesSameDirection: index,
				});
			}
			if (plusX < matrix[y].length) {
				const direction = 'right';
				let weight = 0;
				for (let i = 1; i <= index; i++) {
					weight += matrix[y][x + i];
				}
				adjacent.push({
					name: `${y},${plusX}`,
					weight,
					position: { x: plusX, y },
					direction,
					timesSameDirection: index,
				});
			}
			if (minusY >= 0) {
				const direction = 'up';
				let weight = 0;
				for (let i = 1; i <= index; i++) {
					weight += matrix[y - i][x];
				}
				adjacent.push({
					name: `${minusY},${x}`,
					weight,
					position: { x, y: minusY },
					direction,
					timesSameDirection: index,
				});
			}
			if (plusY < matrix.length) {
				const direction = 'down';

				let weight = 0;
				for (let i = 1; i <= index; i++) {
					weight += matrix[y + i][x];
				}
				adjacent.push({
					name: `${plusY},${x}`,
					weight,
					position: { x, y: plusY },
					direction,
					timesSameDirection: index,
				});
			}
		}

		return adjacent;
	}

	public isSamePosition = (position: Position): boolean => {
		return this.position.x === position.x && this.position.y === position.y;
	};
}

class Dijkstra {
	public vertices: Vertex[] = [];
	private _startVertex!: Vertex;
	private _endVertex!: Vertex;
	// private _visited: Map<string, boolean> = new Map();
	private _oppositeDirection = {
		up: 'down',
		down: 'up',
		left: 'right',
		right: 'left',
	};

	constructor(data: { chart: number[][] }) {
		const { chart } = data;
		this._createVertices(chart);
	}

	private _createVertices(chart: number[][]) {
		for (let row = 0; row < chart.length; row++) {
			for (let cell = 0; cell < chart[row].length; cell++) {
				const vertex = new Vertex({
					position: { x: cell, y: row },
					weight: chart[row][cell],
					chart,
				});
				this._addVertex(vertex);
				if (row === 0 && cell === 0) this._startVertex = vertex;
				if (row === chart.length - 1 && cell === chart[row].length - 1)
					this._endVertex = vertex;
			}
		}
	}

	private _addVertex(vertex: Vertex) {
		this.vertices.push(vertex);
	}

	public findShortestPath() {
		const startVertex = this._startVertex;
		const endVertex = this._endVertex;
		let startVertexName = startVertex.name;
		let endVertexName = endVertex.name;

		let weights: { [key: string]: number } = {};
		let backtrace: { [key: string]: string } = {};
		let pq = new PriorityQueue();

		weights[startVertexName] = startVertex.weight;

		this.vertices.forEach((vertex) => {
			if (vertex.name !== startVertexName) {
				weights[vertex.name] = Infinity;
			}
		});

		pq.enqueue([startVertexName, 0]);

		while (!pq.isEmpty()) {
			let shortestStep = pq.dequeue();
			let currentVertexName = shortestStep[0];
			// if (this._visited.has(currentVertexName)) continue;
			// this._visited.set(currentVertexName, true);

			const currentVertex = this.vertices.find(
				(vertex) => vertex.name === currentVertexName
			);
			if (!currentVertex) continue;
			for (let adjacentVertex of currentVertex.adjacentVertices) {
				if (
					adjacentVertex.direction === currentVertex.lastDirection ||
					this._oppositeDirection[adjacentVertex.direction] ===
						currentVertex.lastDirection
				) {
					continue;
				}
				let weight = weights[currentVertexName] + adjacentVertex.weight;
				if (weight < weights[adjacentVertex.name]) {
					const neighbor = this.vertices.find((vertex) =>
						vertex.isSamePosition(adjacentVertex.position)
					)!;
					neighbor.lastDirection = adjacentVertex.direction;
					neighbor.timesSameDirection =
						adjacentVertex.timesSameDirection;
					weights[neighbor.name] = weight;
					backtrace[neighbor.name] = currentVertexName;
					pq.enqueue([neighbor.name, weight]);
				}
			}
		}

		let path = [endVertexName];
		let lastStep = endVertexName;

		while (lastStep !== startVertexName) {
			path.unshift(backtrace[lastStep]);
			lastStep = backtrace[lastStep];
		}
		console.log(`Shortest path: ${path.join(' -> ')}`);
		const moreData = path.map((vertexName) => {
			const vertex = this.vertices.find(
				(vertex) => vertex.name === vertexName
			)!;
			// console.log({vertex});
			return {
				name: vertexName,
				weight: vertex.weight,
				timesSameDirection: vertex.timesSameDirection,
				lastDirection: vertex.lastDirection,
			};
		});
		// console.log(moreData);
		console.log({ weights });
		return weights[endVertexName];
	}
}

class PriorityQueue {
	private _collection: any[] = [];

	constructor() {}

	public enqueue(element: any[]) {
		if (this.isEmpty()) {
			this._collection.push(element);
		} else {
			let added = false;
			for (let i = 1; i <= this._collection.length; i++) {
				if (element[1] < this._collection[i - 1][1]) {
					this._collection.splice(i - 1, 0, element);
					added = true;
					break;
				}
			}
			if (!added) {
				this._collection.push(element);
			}
		}
	}

	public dequeue() {
		return this._collection.shift();
	}

	public isEmpty() {
		return this._collection.length === 0;
	}
}

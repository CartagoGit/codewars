//* https://www.halloween.dev/es/retos/2024/5

interface IPosition {
    x: number
    y: number
}


type IRoomChar = 'T' | '▲' | '.' | '#';
type IRoomKind = 'me' | 'pyramidHead' | 'emptyPos' | 'wall';

type IVertex = IPosition & {
    roomKind: IRoomKind,
    target: IPosition,
    parent?: Vertex,
    g?: number,

}

type Vertex = IVertex & {
    h: number;
    f: number;
    getBrothers: () => IPosition[]
}

// class Vertex implements IPosition {
//     public x: number
//     public y: number
//     public g: number
//     public h: number
//     public f: number
//     public parent?: Vertex
//     public roomKind: IRoomKind

//     constructor(data: IVertex,) {
//         const { x, y, parent, target, g, roomKind } = data;
//         this.x = x
//         this.y = y
//         this.g = g ?? 1;
//         this.parent = parent;
//         this.roomKind = roomKind
//         this.h = this._getHeuristic(target);
//         this.f = this.g + this.h
//     }

//     private _getHeuristic(target: IPosition): number {
//         return Math.abs(this.x - target.x) + Math.abs(this.y - target.y)
//     }

//     public getBrothers(): IPosition[] {
//         return [
//             { x: this.x + 1, y: this.y },
//             { x: this.x - 1, y: this.y },
//             { x: this.x, y: this.y + 1 },
//             { x: this.x, y: this.y - 1 }
//         ]
//     }
// }


function escapePyramidHead(room: IRoomChar[][]) {
    const dictionary: Record<IRoomChar, IRoomKind> = {
        'T': 'me',
        '▲': 'pyramidHead',
        '.': 'emptyPos',
        '#': 'wall'
    }
    // Ya que el ejercicio no permite usar clases, se crea una función que crea los vértices de manera manual, como una función prototipo creadora del objeto
    function createVertex(data: IVertex): Vertex {
        // Calcula la heurística
        const getHeuristic = (target: IPosition): number =>
            Math.abs(x - target.x) + Math.abs(y - target.y);
        // Método para obtener los hermanos
        const getBrothers = (): IPosition[] => {
            return [
                { x: x + 1, y: y },
                { x: x - 1, y: y },
                { x: x, y: y + 1 },
                { x: x, y: y - 1 }
            ];
        };
        const { x, y, target, g } = data;

        // Devuelve el objeto resultante
        return {
            ...data,
            h: getHeuristic(target),
            f: (g ?? 1) + getHeuristic(target),
            getBrothers
        };
    }

    function createMinHeap<T extends { f: number; h: number }>() {
        const heap = [] as T[];
        const compare = (a: T, b: T) => a.f - b.f || a.h - b.h;
        const heapifyUp = (index: number) => {
            let parentIndex = Math.floor((index - 1) / 2);
            while (parentIndex >= 0 && compare(heap[parentIndex], heap[index]) > 0) {
                [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]];
                index = parentIndex;
                parentIndex = Math.floor((index - 1) / 2);
            }
        }

        const heapifyDown = (index: number) => {
            let smallest = index;
            const left = 2 * index + 1;
            const right = 2 * index + 2;

            if (left < heap.length && compare(heap[left], heap[smallest]) < 0) {
                smallest = left;
            }

            if (right < heap.length && compare(heap[right], heap[smallest]) < 0) {
                smallest = right;
            }

            if (smallest !== index) {
                [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
                heapifyDown(smallest);

            }
        };

        const push = (item: T) => {
            heap.push(item);
            heapifyUp(heap.length - 1);
        }
        const pop = () => {
            if (heap.length === 0) return undefined;
            const item = heap[0];
            heap[0] = heap[heap.length - 1];
            heap.pop();
            heapifyDown(0);
            return item;
        }
        return {
            heap,
            push,
            pop,
            heapifyUp,
            heapifyDown,
            compare
        }
    }


    // Get the position of pyramidHead and me
    const [mePos, pyramidPos] = room.reduce((acc, row, y) => {
        if (!!acc[0] && !!acc[1]) return acc;
        const meX = row.indexOf("T")
        if (meX !== -1) acc[0] = { x: meX, y }
        const pyramidX = row.indexOf("▲")
        if (pyramidX !== -1) acc[1] = { x: pyramidX, y }
        return acc
    }, [] as IPosition[])

    const target: IPosition = { x: mePos.x, y: mePos.y }

    // Get the initial vertex
    const initVertex: Vertex = createVertex(
        {
            x: pyramidPos.x,
            y: pyramidPos.y,
            target,
            roomKind: dictionary["▲"]
        }
    )

    // Create the state room with calculated vertices
    let stateRoom: (Vertex | null)[][] = room.map(row => row.map(() => null));
    stateRoom[initVertex.y][initVertex.x] = initVertex;
    let openList = createMinHeap<Vertex>();
    openList.push(initVertex);
    while (openList.heap.length > 0) {
        const vertex = openList.pop() as Vertex;


        if (vertex.roomKind === 'me') {
            let path: IPosition[] = []
            let current = vertex;
            while (current.parent) {
                path.push({ x: current.x, y: current.y });
                current = current.parent;
            }
            return path.length;
        }

        for (let side of vertex.getBrothers()) {
            const newPosRoom = room[side.y]?.[side.x];
            if (!newPosRoom || newPosRoom === '#') continue;
            const newVertex = createVertex(
                {
                    ...side,
                    target,
                    parent: vertex,
                    roomKind: dictionary[newPosRoom]
                }
            )
            if (!stateRoom[newVertex.y][newVertex.x]) {
                stateRoom[newVertex.y][newVertex.x] = newVertex;
                openList.push(newVertex);
            } else if (newVertex.f < stateRoom[newVertex.y][newVertex.x]!.f) {
                stateRoom[newVertex.y][newVertex.x] = newVertex;
                openList.push(newVertex);

            }
        }
    }

    return -1
}


const room: IRoomChar[][] = [
    ['.', '.', '#', '.', '▲'],
    ['#', '.', '#', '.', '#'],
    ['.', '.', '.', '.', '.'],
    ['#', '#', '#', '.', '#'],
    ['T', '.', '.', '.', '.'],
]

console.log(escapePyramidHead(room))// -> 8
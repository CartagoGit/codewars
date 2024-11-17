//* https://www.halloween.dev/es/retos/2024/5

interface IPosition {
    x: number
    y: number
}


type IRoomChar = 'T' | '▲' | '.' | '#';
type IRoomKind = 'me' | 'pyramidHead' | 'emptyPos' | 'wall';

type IVertex = IPosition & { roomKind: IRoomKind, target: IPosition, parent?: Vertex, g?: number }

class Vertex implements IPosition {
    public x: number
    public y: number
    public g: number
    public h: number
    public f: number
    public parent?: Vertex
    public roomKind: IRoomKind

    constructor(data: IVertex,) {
        const { x, y, parent, target, g, roomKind } = data;
        this.x = x
        this.y = y
        this.g = g ?? 1;
        this.h = this._getHeuristic(target);
        this.f = this.g + this.h
        this.parent = parent;
        this.roomKind = roomKind
    }

    private _getHeuristic(target: IPosition): number {
        return Math.abs(this.x - target.x) + Math.abs(this.y - target.y)
    }

    public getBrothers(): IPosition[] {
        return [
            { x: this.x + 1, y: this.y },
            { x: this.x - 1, y: this.y },
            { x: this.x, y: this.y + 1 },
            { x: this.x, y: this.y - 1 }
        ]
    }
}


function escapePyramidHead(room: IRoomChar[][]) {
    const dictionary: Record<IRoomChar, IRoomKind> = {
        'T': 'me',
        '▲': 'pyramidHead',
        '.': 'emptyPos',
        '#': 'wall'
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
    const initVertex: Vertex = new Vertex(
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
    let openList = [initVertex];
    while (openList.length > 0) {
        openList = stateRoom.flat().filter(vertex => vertex !== null).sort((a, b) => a.f - b.f);
        const vertex = openList.shift() as Vertex;

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
            const newVertex = new Vertex(
                {
                    x: side.x,
                    y: side.y,
                    target,
                    parent: vertex,
                    roomKind: dictionary[newPosRoom]
                }
            )
            if (!stateRoom[newVertex.y][newVertex.x]) {
                stateRoom[newVertex.y][newVertex.x] = newVertex;
            } else {
                const oldVertex = stateRoom[newVertex.y][newVertex.x] as Vertex;
                if (newVertex.f < oldVertex.f) {
                    stateRoom[newVertex.y][newVertex.x] = newVertex;
                }
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

const finalResult = escapePyramidHead(room); // -> 8
console.log(IRoomChar[][])
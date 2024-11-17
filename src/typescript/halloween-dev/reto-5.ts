//* https://www.halloween.dev/es/retos/2024/5

interface IPosition {
    x: number
    y: number
}

type IRoomChar = 'T' | '▲' | '.' | '#';
type IRoomKind = 'me' | 'pyramidHead' | 'emptyPos' | 'wall';

type IVertex = IPosition & { parent?: Vertex, g?: number }


class Vertex implements IPosition {

    private _target: IPosition

    public x: number
    public y: number
    public g: number
    public h: number
    public f: number
    public parent?: Vertex
    public roomKind: IRoomKind


    constructor(data: { vertex: IVertex, target: IPosition, roomKind: IRoomKind }) {
        const { vertex, target, roomKind } = data;
        const { x, y, parent, g } = vertex;
        this.x = x
        this.y = y
        this.g = g ?? 1;
        this._target = target
        this.h = this._getHeuristic(target)
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

function escapePyramidHead(room: string[][]) {
    const dictionary: Record<IRoomChar, IRoomKind> = {
        'T': 'me',
        '▲': 'pyramidHead',
        '.': 'emptyPos',
        '#': 'wall'
    }



    // Get the position of pyramidHead and me
    const [mePos, pyramidPos] = room.reduce((acc, row, y) => {
        if (acc[0] && acc[1]) return acc;
        const meX = row.indexOf(dictionary.T)
        if (meX !== -1) acc[0] = { x: meX, y }
        const pyramidX = row.indexOf(dictionary["▲"])
        if (pyramidX !== -1) acc[1] = { x: pyramidX, y }
        return acc
    }, [] as IPosition[])

    const target: IPosition = { x: mePos.x, y: mePos.y }

    // Get the initial vertex
    const initVetex: Vertex = new Vertex(
        {
            vertex: { x: pyramidPos.x, y: pyramidPos.y },
            target,
            roomKind: dictionary["▲"]
        }
    )
    // Code here
    return 0
}
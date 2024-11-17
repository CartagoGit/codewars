//* https://www.halloween.dev/es/retos/2024/5

interface IPosition {
    x: number
    y: number
}

type IVertex = IPosition & {
    parent: IVertex | null
    g: number // cost
    h: number // heuristic
    f: number // g + h
}

class Vertex implements IVertex {
    x: number
    y: number
    parent: IVertex | null
    g: number
    h: number
    f: number
    constructor(data: Omit<IVertex, 'f'> | Vertex) {
        const { x, y, parent, g, h } = data
        this.x = x
        this.y = y
        this.parent = parent
        this.g = g
        this.h = h
        this.f = g + h
    }
}

function escapePyramidHead(room: string[][]) {
    const dictionary = {
        'T': 'me',
        '▲': 'pyramidHead',
        '.': 'emptyPos',
        '#': 'wall'
    }
    const heuristic = (a: IPosition, b: IPosition) =>
        Math.abs(a.x - b.x) + Math.abs(a.y - b.y)


    // Get the position of pyramidHead and me
    const [mePos, pyramidPos] = room.reduce((acc, row, y) => {
        if (acc[0] && acc[1]) return acc;
        const meX = row.indexOf(dictionary.T)
        if (meX !== -1) acc[0] = { x: meX, y }
        const pyramidX = row.indexOf(dictionary["▲"])
        if (pyramidX !== -1) acc[1] = { x: pyramidX, y }
        return acc
    }, [] as IPosition[])

    // Get the initial vertex
    const initHeuristic = heuristic(pyramidPos, mePos)
    const initVetex: Vertex = new Vertex(
        {
            x: pyramidPos.x,
            y: pyramidPos.y,
            parent: null,
            g: 0,
            h: initHeuristic
        }
    )
    // Code here
    return 0
}
//* https://www.halloween.dev/es/retos/2024/3

interface ICell {
    x: number,
    y: number,
    collected: number,
    heuristic: number,
    parent: ICell | null
}

type IDirection = "UP" | "DOWN" | "LEFT" | "RIGHT" | 'INIT';

interface IPath {
    x: number,
    y: number,
    direction: IDirection,
    toCollect: number,
    collected: number
}

type IStep = number[][];

/**
 * Función que calcula la heurística de una celda (distancia Manhattan)
 * @param x Coordenada x de la celda
 * @param y Coordenada y de la celda
 * @param goalX Coordenada x del objetivo
 * @param goalY Coordenada y del objetivo
 * @returns Valor de la heurística
 */
const heuristic = (x: number, y: number, goalX: number, goalY: number): number => {
    // Utilizamos la distancia Manhattan como heurística
    return Math.abs(x - goalX) + Math.abs(y - goalY);
}

/**
 * Función que encuentra el camino más seguro en un sueño
 * @param dream Matriz que representa el sueño
 * @returns Valor total de la celda más segura
 */
function findSafestPath(dream: number[][]): number {
    const rows = dream.length;
    const cols = dream[0].length;

    // Objetivo
    const goalX = cols - 1;
    const goalY = rows - 1;

    // Celda de inicio
    const start: ICell = {
        x: 0,
        y: 0,
        collected: dream[0][0], // Valor inicial de la celda de inicio
        heuristic: heuristic(0, 0, goalX, goalY),
        parent: null
    };

    // Cola de prioridad, donde almacenamos las celdas abiertas para explorar
    const openList: ICell[] = [start];
    // Conjunto de celdas cerradas (ya exploradas)
    const closedList: Set<string> = new Set();

    while (openList.length > 0) {
        // Ordenar la lista abierta por el valor de f(n) = g(n) + h(n) (menor primero)
        openList.sort((a, b) => (a.collected + a.heuristic) - (b.collected + b.heuristic));
        // Extraer la celda con menor valor de f(n)
        const current = openList.shift() as ICell;

        // Si hemos llegado al objetivo, reconstruir el camino
        if (current.x === goalX && current.y === goalY) {
            let totalDanger = current.collected; // Valor total al llegar al objetivo
            let steps: IStep = [];
            let stepCell: ICell | null = current;
            while (stepCell !== null) {
                steps.push([stepCell.x, stepCell.y]);
                stepCell = stepCell.parent;
            }
            const orderSteps = [...steps].reverse();
            const paths = orderSteps.reduce((acc, [x, y], index) => {
                const [prevX, prevY] = orderSteps?.[index - 1] ?? [0, 0];
                const direction: IDirection =
                    !prevX && !prevY ? 'INIT' :
                    x > prevX ? "RIGHT" : // Si se mueve a la derecha
                    y > prevY ? "DOWN" : "INIT"; // Si se mueve hacia abajo
                const toCollect = dream[x][y];
                const collected = (acc[index - 1]?.collected ?? 0) + toCollect;
                acc.push({ x, y, direction, toCollect, collected });
                return acc;
            }, [] as IPath[]);
            console.log("Camino más seguro:", { paths });
            return totalDanger;
        }

        // Añadir la celda a la lista cerrada
        closedList.add(`${current.x},${current.y}`);

        // Explorar las celdas vecinas (solo hacia abajo y hacia la derecha)
        const neighbors: [number, number][] = [
            [current.x + 1, current.y], // Abajo
            [current.x, current.y + 1], // Derecha
        ];

        for (const [nx, ny] of neighbors) {
            // Comprobar si la celda vecina es válida
            if (nx >= 0 && ny >= 0 && nx < rows && ny < cols && !closedList.has(`${nx},${ny}`)) {
                // Calcular el costo g y la heurística h
                const collected = current.collected + dream[nx][ny];
                const heuristicValue = heuristic(nx, ny, goalX, goalY);

                // Crear la celda vecina
                const neighborCell: ICell = { x: nx, y: ny, collected, heuristic: heuristicValue, parent: current };

                // Insertar la celda vecina en la lista abierta
                openList.push(neighborCell);
            }
        }
    }

    // Si no se encontró un camino, retornar 0
    return 0;
}

const dream2 = [
    [1, 2],
    [3, 4],
    [6, 5],
    [7, 8]
];

console.log(findSafestPath(dream2)); // Esperamos 20

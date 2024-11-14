//* https://www.halloween.dev/es/retos/2024/3

function findSafestPath(dream: number[][]): number {
    const rows = dream.length;
    const cols = dream[0].length;

    const goalX = rows - 1;
    const goalY = cols - 1;

    const dfs = (x: number, y: number, collected: number): number => {
        // Si estamos fuera de los límites, retornamos un valor alto para descartar este camino
        if (x >= rows || y >= cols) return Infinity;
        // Acumular la peligrosidad de la celda actual
        collected += dream[x][y];

        // Si hemos llegado al objetivo, retornamos el valor acumulado
        if (x === goalX && y === goalY) return collected;

        // Exploramos hacia abajo y hacia la derecha y elegimos el camino con menor peligrosidad
        const moveDown = dfs(x + 1, y, collected); // Abajo
        const moveRight = dfs(x, y + 1, collected); // Derecha
        return Math.min(moveDown, moveRight);
    }

    // Iniciamos la búsqueda desde la celda (0, 0)
    return dfs(0, 0, 0);
}



const dream2 = [
    [1, 2],
    [3, 4],
    [6, 5],
    [7, 8]
];

console.log(findSafestPath(dream2)); // Esperamos 20

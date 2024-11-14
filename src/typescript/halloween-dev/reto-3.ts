//* https://www.halloween.dev/es/retos/2024/3

interface ICollected {
    results: number[];
}

function findSafestPath(dream: number[][]): number {
    let collected: ICollected[][] = 
        dream.map(row => row.map(() => ({ results: [] })));
    for (let [rowIndex, row] of dream.entries()) {
        for (let [cellIndex, cellValue] of row.entries()) {
            const [nextX, nextY] = [rowIndex + 1, cellIndex + 1];
            const rightValue = dream[nextX]?.[cellIndex];
            const downValue = dream[rowIndex]?.[nextY];
            const currentCell = collected[rowIndex][cellIndex];
            const hasCollected = !!currentCell.results.length;
            const currentCellValue = hasCollected
                ? Math.min(...currentCell.results)
                : cellValue;
            if (rightValue !== undefined) {
                const value = currentCellValue + rightValue;
                collected[nextX][cellIndex].results.push(value);
            }
            if (downValue !== undefined) {
                const value = currentCellValue + downValue;
                collected[rowIndex][nextY].results.push(value);
            }
        }
    }
    const { results } = collected[dream.length - 1][dream[0].length - 1];
    return Math.min(...results);
}



const dream2 = [
    [1, 2],
    [3, 4],
    [6, 5],
    [7, 8]
];

console.log(findSafestPath(dream2)); // Esperamos 20

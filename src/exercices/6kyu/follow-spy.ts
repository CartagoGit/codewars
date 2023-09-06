//* https://www.codewars.com/kata/5899a4b1a6648906fe000113/train/typescript

export function findRoutes(routes: string[][]): string {
	const orderRoutes = getRoute(routes).join(', ');
    return orderRoutes;
}

const getRoute = (routes: string[][]): string[] => {};

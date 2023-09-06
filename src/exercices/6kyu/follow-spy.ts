//* https://www.codewars.com/kata/5899a4b1a6648906fe000113/train/typescript

export function findRoutes(routes: string[][]): string {
	let orderRoutes: string[][] = [];
	for (let [index, route] of routes.entries()) {
		const actualOrder = [[...route]];
		let listNotTravelled = [...routes];
		listNotTravelled.splice(index, 1);
		orderRoutes = getRoute({ listNotTravelled, actualOrder });
		if (orderRoutes.length === routes.length) break;
	}
	const result = [
		orderRoutes[0][0],
		...orderRoutes.map((route) => route[1]),
	].join(', ');
	return result;
}

const getRoute = (data: {
	listNotTravelled: string[][];
	actualOrder: string[][];
}): string[][] => {
	const { listNotTravelled, actualOrder } = data;
	if (listNotTravelled.length === 0) return actualOrder;
	const nextRoute = listNotTravelled.find((route, index) => {
		const isNextRoute = route[0] === actualOrder[actualOrder.length - 1][1];
		if (isNextRoute) listNotTravelled.splice(index, 1);
		return isNextRoute;
	});
	if (!nextRoute) {
		if (listNotTravelled[0][0] === actualOrder[actualOrder.length - 1][1])
			actualOrder.push(listNotTravelled[0]);
		return actualOrder;
	}
	actualOrder.push(nextRoute);
	getRoute({ listNotTravelled, actualOrder });
	return actualOrder;
};

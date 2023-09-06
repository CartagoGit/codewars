//* https://www.codewars.com/kata/5899a4b1a6648906fe000113/train/typescript

export function findRoutes(routes: string[][]): string {
	console.log({ routes });
	const actualOrder = [routes[0]];
	const listNotTravelled = routes.slice(1);
	const orderRoutes = getRoute({ listNotTravelled, actualOrder })
		.map((route) => route[0])
		.join(', ');
	return orderRoutes;
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
		actualOrder.push(listNotTravelled[0]);
		return actualOrder;
	}
	actualOrder.push(nextRoute);
	getRoute({ listNotTravelled, actualOrder });
	return actualOrder;
};

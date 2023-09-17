export const initDoorsInTheSchool = (): any => {
	return doors(80928);
	// return doors(5);
	// return doors(5);
};

export const doors = (n: number): number => {
	let listDoors: Array<boolean> = new Array(n).fill(false);
	for (let indexStudent = 0; indexStudent < n; indexStudent++) {
		const numStudent = indexStudent + 1;
		let numDoor = numStudent;
		let counter = 1;
		while (numDoor <= n) {
            listDoors[numDoor - 1] = !listDoors[numDoor - 1];
			counter++;
			numDoor = numStudent * counter;
		}
	}
	return listDoors.filter((door) => door === true).length;
};

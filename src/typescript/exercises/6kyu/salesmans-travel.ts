//* https://www.codewars.com/kata/56af1a20509ce5b9b000001e/train/typescript

// Regexp to extract the house number, street and zipcode from the address
const patternAddress = /^(\d+) (.+?)\s+([A-Z]{2} \d{5})$/;

export const travel = (addressList: string, zipcode: string): string => {
	if (!zipcode || !addressList.includes(zipcode)) return `${zipcode}:/`;
	const addresses = addressList.split(',');
	const streets: string[] = [];
	const houseNumbers: string[] = [];
	// Find the addresses that match the zipcode
	addresses.forEach((address) => {
		const [, houseNumber, street, zipFromAddress] =
			address.match(patternAddress)!;
		if (zipFromAddress !== zipcode) return;
		streets.push(street);
		houseNumbers.push(houseNumber);
	});
	if (streets.length === 0) return `${zipcode}:/`;
	return `${zipcode}:${streets.join(',')}/${houseNumbers.join(',')}`;
};

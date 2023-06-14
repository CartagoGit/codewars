//* https://www.codewars.com/kata/539de388a540db7fec000642/train/typescript

export function checkCoupon(
	enteredCode: string,
	correctCode: string,
	currentDate: string,
	expirationDate: string
): boolean {
	if(enteredCode !== correctCode) return false
    if(new Date(currentDate) > new Date(expirationDate)) return false
    return true
}

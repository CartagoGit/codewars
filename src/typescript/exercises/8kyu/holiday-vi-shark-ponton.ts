//* https://www.codewars.com/kata/57e921d8b36340f1fd000059/train/typescript

export function shark(
	pontoonDistance: number,
	sharkDistance: number,
	youSpeed: number,
	sharkSpeed: number,
	dolphin: boolean
): string {
    if(dolphin) sharkSpeed /= 2;
    if(pontoonDistance/youSpeed < sharkDistance/sharkSpeed) return 'Alive!';
    else return "Shark Bait!";
}

//* https://www.codewars.com/kata/562f91ff6a8b77dfe900006e/train/typescript

export function movie(card: number, ticket: number, perc: number): number {
	let priceTicketWithCard = ticket * perc;
	let totalWithCard = card + priceTicketWithCard;
	let totalWithoutCard = ticket;
	let times = 1;
	while (Math.ceil(totalWithCard) >= totalWithoutCard) {
        times++;
		priceTicketWithCard *= perc;
		totalWithCard += priceTicketWithCard;
		totalWithoutCard += ticket;
	}
	return times;
}

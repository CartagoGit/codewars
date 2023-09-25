//* https://www.codewars.com/kata/515bb423de843ea99400000a/train/typescript

export class PaginationHelper {
	public collection: any[];
	public itemsPerPage: number;

	constructor(collection?: any[], itemsPerPage?: number) {
		this.collection = collection ?? [];
		this.itemsPerPage = itemsPerPage ?? 0;
	}
	public itemCount(): number {
		return this.collection.length;
	}
	public pageCount(): number {
		return Math.ceil(this.collection.length / this.itemsPerPage);
	}
	public pageItemCount(pageIndex: number): number {
		if (pageIndex < 0 || pageIndex >= this.pageCount()) return -1;
		else if (
			pageIndex < this.pageCount() - 1 ||
			this.collection.length % this.itemsPerPage === 0
		)
			return this.itemsPerPage;
		else return this.collection.length % this.itemsPerPage;
	}
	public pageIndex(itemIndex: number): number {
		return itemIndex < 0 || itemIndex >= this.collection.length
			? -1
			: Math.floor(itemIndex / this.itemsPerPage);
	}
}

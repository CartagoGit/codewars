export const initReverse = () => {
	return reverse([1, 2, 3]);
};

export let reverse=(a:any)=>[...a].map(a.pop,a)

export function oddOrEven(array: number[]) {
    return ( array.reduce((a, b)=> a + b, 0) ) %2 ? 'odd' : 'even' 
  }
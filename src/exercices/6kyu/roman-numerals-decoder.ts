export function solution(roman: string): number {
    const symbols : {[key:string]:number} = {I:1, V:5, X:10, L: 50, C: 100, D: 500, M: 1000}
    const arrayRoman: string[] = roman.split('');
    let counter: number = 0;
    for(let [i, char] of arrayRoman.entries()){
      if(i !== 0 && symbols[arrayRoman[i-1]] < symbols[char]  ) {
        counter = symbols[char] - counter; 
      }else {
        counter += symbols[char];
      }
    }
    return counter;
    }
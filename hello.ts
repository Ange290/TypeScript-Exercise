export const reverseSeq = (n: number): number[] => {
  let arr: number[] = [];
  for(let a = n; a >= 1; a--){
    arr.push(a);
  }
  return arr;
};
console.log(reverseSeq(5));

export function smash (words: string[]): string {
  let stng :string = words.join('');
   return stng;
};
console.log(smash(['hello', 'world', 'this', 'is', 'typescript']));

export function greet(name: string, owner: string): string{
  if(name.lenght === owner.lenght){
    return `Hello ${name}`;
  }else{
    return`Hello guest`;
  }
 
}
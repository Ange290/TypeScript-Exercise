const reverseSeq = n => {
  let arr =[]
  for(let a = n; a >=1;a--){
    
    arr.push(a)
  }
  
  return arr;
};
console.log(reverseSeq(5))
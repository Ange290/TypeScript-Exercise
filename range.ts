// Solve all the typing issues in the code without changing the implementation

type Person ={
    name: string;
    age: number
}
const setRange = (range: [boolean, Person]): {x: boolean, y: boolean} => {
  const x = range[0];
  const y = range[1];

  return { x, y: y.age > 10 };
};

console.log(setRange([true, { name: 'Patrick', age: 3}]));
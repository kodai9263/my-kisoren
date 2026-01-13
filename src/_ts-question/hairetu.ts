const numbers = [10, 20, 30, 40, 50];

// 結果
// {
//   sum: 150,
//   average: 30,
//   max: 50,
//   min: 10
// }
console.log(calculateStates(numbers));

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/*interface State {
  sum: number;
  average: number;
  max: number;
  min: number;
}

const calculateStates = (args: number[]): State => {
  let sum = 0;
  args.forEach((num) => (sum += num));

  const average = sum / args.length;

  const max = Math.max(...args);

  const min = Math.min(...args);

  return { sum, average, max, min };
};*/

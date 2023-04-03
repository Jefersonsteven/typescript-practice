(()=>{

  const calcTotalR = (price: number[]): string => {
    const sum = price.reduce((a, c) => a + c);
    const rta = `La suma de ${price.join(', ')} es: ${sum}`
    return rta;
  }

  const calcTotal = (price: number[]): void => {
    const sum = price.reduce((a, c) => a + c);
    const rta = `La suma de ${price.join(', ')} es: ${sum}`;
    console.log(rta);
  }

  const sum = calcTotalR([1, 4, 8, 7, 9]);
  const sum2 = calcTotal([1, 4, 8, 7, 9]);

  console.log(sum);
  console.log(sum2);

})()

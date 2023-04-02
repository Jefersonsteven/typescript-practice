(()=>{

  const prices: number[] = [120,220,320,420,520,620,720];
  const strings: string[] = ['one', 'two', 'three', 'four'];

  const strAndNumbers = [1, 'two', 3, 'four'];
  const strAndNumbers2: (string | number)[] = [1, 'two', 3, 'four'];

  const mixed = prices.map(price => {
    if(price > 400) {
      return String(price)
    }
    if(price > 200 && price < 400) {
      return price
    } else {
      return price === price;
    }
  });
  console.log(mixed);

  const arr: (string|number)[] = [];
  arr.push('Hello');
  arr.push(101145);
  arr.push(0b1011000);
  arr.push(0xf54f49);
  console.log(arr);
  const prices2: number[] = [120,220,320,420,520,620,720];
  const sum = prices2.map((num, index) => num * index);

  console.log(sum);

})()

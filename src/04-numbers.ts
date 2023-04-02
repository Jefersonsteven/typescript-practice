(()=>{

  let productPrice = 100;
  productPrice = 150;
  console.log('productPrice:', productPrice);

  let customerAge: number = 25;
  // customerAge = customerAge + '1'; // !error, Esto cambiaria el tipado de la variable a string
  customerAge = customerAge + 1;
  console.log('customerAge:', customerAge);


  let productInStock: number;
  // console.log('productInStock:', productInStock); // !error, La variable no se le ha asignado un valor
  // if(productInStock > 10) console.log('Si es mayor'); // !error

  let discount = parseInt('123');
  console.log('discount:', discount);

  let hex = 0xfff;
  console.log('hex:', hex);

  let bin = 0b10110;
  console.log('bin:', bin);

})()

(()=>{

  let productTitle = 'My amazing product';
  // productTitle = null; //! error
  // productTitle = () => {}; //! error
  // productTitle = 123; //! error

  productTitle = 'My amazing product2';
  console.log('producTitle:', productTitle);

  const productDescription = "I'm a product amazing";
  console.log('productDescription:', productDescription);


  let productPrice = 100;
  let isNew: boolean = false;

  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `;

  console.log('summary:', summary);

})()

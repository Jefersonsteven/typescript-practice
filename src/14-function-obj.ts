(() => {


  const login = (data: { email: string, password: number }): object => {
    return { date: new Date(), email: data.email, password: data.password };
  }

  type Sizes = 'S' | 'M' | 'L' | 'XL';
  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }): void => {
    products.push(data);
  }

  const entry = login({
    email: 'holamundo@dev.com',
    password: 547134544,
  });


  addProduct({
    title: 'Papas',
    createdAt: new Date(),
    stock: 22,
    size: 'S',
  })

  console.log(entry);
  console.log(products);

})()

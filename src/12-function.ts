(()=>{

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const createProductJson = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const product1 = createProductJson('p1', new Date(), 12);
  console.log(product1);


})()

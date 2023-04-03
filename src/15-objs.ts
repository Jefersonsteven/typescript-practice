import { products, addProduct } from "./products/product.service";

addProduct({
  title: 'Papas',
  createdAt: new Date(),
  stock: 22,
  size: 'S',
})

console.log(products);



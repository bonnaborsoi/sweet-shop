import {Card} from '../components/Card';
import { CartButton } from '../components/CartButton';


export interface Product {
  id: number;
  name: string;
  price: number;
  url: string;
}

export const products: Product[] = [
  { id: 1, name: 'Cookies', price: 20.00, url: './src/assets/img/food/cookies.webp'},
  { id: 2, name: 'Milkshake', price: 19.90, url: './src/assets/img/food/milkshake.jpg'},
  { id: 3, name: 'Cupcake', price: 15.00, url: './src/assets/img/food/cupcake.webp'},
  { id: 4, name: 'Brownie', price: 20.00, url: './src/assets/img/food/brownie.jpg'},
  { id: 5, name: 'Bolo de Morango', price: 49.90, url: './src/assets/img/food/cake.jpg'},
  { id: 6, name: 'Red Velvet', price: 59.90, url: './src/assets/img/food/redvelvet.webp'},
  { id: 7, name: 'Sorvete', price: 12.00, url: './src/assets/img/food/icecream.jpg'},
  { id: 8, name: 'Biscoitos Coração', price: 15.00, url: './src/assets/img/food/biscuits.jpg'},
  { id: 9, name: 'Cappuccino', price: 9.90, url: './src/assets/img/food/cappuccino.jpg'},
  { id: 10, name: 'Macaron', price: 29.90, url: './src/assets/img/food/macaron.jpg'},
];

export function HomePage() {

  return (
    <>
      <CartButton/>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mx-40 itens-center'>
        {products.map((item) => (
          <Card id={item.id} name={item.name} price={item.price} image={item.url} />
        ))}
      </div>
    </>
  );
}

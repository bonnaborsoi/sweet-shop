import React from 'react';
import { useCart } from "../context/CartContext"

interface CardCartProps {
  id: number,
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export const CartCard: React.FC<CardCartProps> = ({id, name, price, image, quantity}) => {
  const {
    removeFromCart
  } = useCart()
  return (

    <div className='grid grid-cols-3  grid-flow-col gap-7 p-3 sm:max-w-sm md:max-w-md lg:max-w-lg sm:h-46 md:h-50 lg:h-56 bg-[#916DB3] border-gray-200 font-mono rounded-lg shadow-md'>
        <img src={image} alt={name} className= 'object-contain h-40 w-full mx-auto block'/>
      <div className="grid lg:grid-cols-1  text-white ">
        <h5 className="sm:text-md md:text-lg lg:text-xl font-bold tracking-tight text-white">{name}</h5>
        <div className="sm:text-sm md:text-md lg:text-lg font-medium" >R${price.toFixed(2)}</div>
        <div className="sm:text-md md:text-lg lg:text-xl font-semibold" >{quantity} x R${price.toFixed(2)} = R${(quantity * price).toFixed(2)} </div> 
      </div>
        <button className ="text-white bg-[#7149C6] hover:bg-[#C9A7EB] font-medium rounded-lg self-center text-sm text-center w-full h-16 overflow-hidden" onClick={() => removeFromCart(id)}>Remover</button>
    </div>
  );
};

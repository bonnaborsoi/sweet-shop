import React from 'react';
import { useCart } from "../context/CartContext"

interface CardProps {
  id: number,
  name: string;
  price: number;
  image: string;
}

export const Card: React.FC<CardProps> = ({id, name, price, image}) => {
  const {
    increaseCartQuantity
  } = useCart()

  return (

    <div className='sm:w-46 md:w-50 lg:w-56 sm:h-46 md:h-50 lg:h-56 bg-[#916DB3] border-gray-200 font-mono rounded-lg shadow-md'>
    <img src={image} alt={name} className= 'object-contain h-36 w-full mx-auto block'/>
      <div className="px-5 pb-5">
        <h5 className="text-lg font-semibold tracking-tight text-white ">{name}</h5>
        <div className="flex items-center space-x-3 p-1 ">
            <div className="text-xl font-bold text-white ">R${price.toFixed(2)}</div>
            <button className ="text-white bg-[#7149C6] hover:bg-[#C9A7EB] font-medium rounded-lg text-sm text-center transform hover:scale-105 transition duration-300 md:px-0.5 lg:px-1.5 md:py-1 lg:py-2 overflow-hidden" onClick={() => increaseCartQuantity(id)}>Adicionar</button>
        </div>
      </div>
    </div>
  );
};

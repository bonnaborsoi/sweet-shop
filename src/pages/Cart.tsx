import { useCart } from "../context/CartContext";
import { products, Product } from "../pages/HomePage";
import { CartCard } from "../components/CartCard";
import { TotalCard } from "../components/TotalCard";
import { HomeButton } from "../components/HomeButton";

export function getProductById(id: number): Product | undefined {
  return products.find(product => product.id === id);
}

export function Cart() {
  const { cartItems } = useCart();

  return (
    <div className="font-mono">

      <HomeButton/>

      <div className=" flex space-x-5 py-5">
         {/* Show items in cart */}
          <div className="grid grid-cols-1  gap-2 py-2 px-56 overflow-x-auto">
            {cartItems.map((item) => {
              const currProduct = getProductById(item.id);

              if (currProduct) {
                return (
                  <div>
                      <CartCard 
                      id= {currProduct.id} 
                      name={currProduct.name} 
                      price={currProduct.price} 
                      image={currProduct.url} 
                      quantity={item.quantity}
                      />
                  
                  </div>
                );
              } else {
                return (
                  <div>
                    Produto não encontrado - ID: {item.id}
                  </div>
                );
              }
          
            })}

          </div>
            <div className="grow">
          </div>

          <div className="px-32">
            <TotalCard/>
          </div>

          
      </div>
    </div>
  );
}

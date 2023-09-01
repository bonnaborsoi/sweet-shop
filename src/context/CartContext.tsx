import { createContext, ReactNode, useContext, useState } from "react";

type ShoppingCartProviderProps = {
  children : ReactNode
}

type CartItem = {
  id: number
  quantity: number
}

type ShoppingCartContext = {
  getItemQuantity: (id: number)=> number
  increaseCartQuantity: (id: number)=> void
  removeFromCart: (id: number)=> void
  clearCart: ()=> void
  cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useCart() {
  return useContext(ShoppingCartContext)

}

// Provider
export function ShoppingCartProvider({children}: ShoppingCartProviderProps){
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  // Quantity
  function getItemQuantity(id: number){
    return cartItems.find(item => item.id === id)?.quantity || 0
  }
  // Increase
  function increaseCartQuantity(id: number){
    const itemInCart = cartItems.find(item => item.id === id);
    if (itemInCart){
      const updatedCartItems = cartItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        
      );
      setCartItems(updatedCartItems);
    }
    else{ 
      return setCartItems([...cartItems, {id, quantity: 1}]);
    }
  }

  // Remove
  function removeFromCart(id: number) {
    setCartItems(currItems => currItems.filter(item => item.id !== id));
  }
  
  function clearCart(){
    setCartItems([]);
  }

  return(
    <ShoppingCartContext.Provider value = {{cartItems, getItemQuantity, increaseCartQuantity, removeFromCart, clearCart}}> 
      {children}
    </ShoppingCartContext.Provider>
  )
}



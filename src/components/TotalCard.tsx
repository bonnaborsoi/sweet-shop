import { useCart } from "../context/CartContext";
import { getProductById } from "../pages/Cart";
import { useState } from  'react';

export const TotalCard: React.FC = () => {
    const { cartItems, clearCart } = useCart();
    const [showAlert, setShowAlert] = useState(false);
    const [successMessageShown, setSuccessMessageShown] = useState(false);

    const finishCart = () => {
        setShowAlert(true);
        if (cartItems.length > 0) {
            clearCart();
            setSuccessMessageShown(true);
            
            setTimeout(() => { 
                // Keeps the message for 5 seconds
                setShowAlert(false);
                setSuccessMessageShown(false);
            }, 5000);
        }
    };

    return( 
        <div className="bg-[#916DB3] border-gray-200 font-mono rounded-lg shadow-md p-3 w-96 h-80 overflow-x-auto">
            <h5 className="text-2xl px-5 font-bold tracking-tight text-white">Total da Compra</h5>

            {/* Show individual total prices per item */}
            <div className="mt-4">
                {cartItems.map((item) => {
                    const currProduct = getProductById(item.id);
                    if (currProduct) {
                        return (
                            <div key={item.id} className="flex justify-between items-center mb-2">
                                <div>{currProduct.name}</div>
                                <div className="text-gray-200">
                                    {item.quantity} x R${currProduct.price.toFixed(2)} = R${(item.quantity * currProduct.price).toFixed(2)}
                                </div>
                            </div>
                        );
                    } else {
                        return (
                            <div> Produto não encontrado - ID: {item.id} </div>
                        );
                    }
        })}
                {/* Show total price */}
                <div className="flex justify-between items-center mt-4"> 
                    <div className="font-semibold">Total:</div>
                    <div className="text-xl font-bold text-white">
                        R${cartItems.reduce((total, item) => {
                            const currProduct = getProductById(item.id);
                            return total + (currProduct ? item.quantity * currProduct.price : 0);
                        }, 0).toFixed(2)}
                    </div>
                </div>

                {/* Finish Button */}
                <div className="px-32">
                    <div className="bg-[#FCBAAD] hover:bg-[#C9A7EB] border-gray-200 font-mono rounded-lg shadow-md w-24 h-10 p-2.5" onClick={finishCart}>
                        <button> 
                            <h1> Finalizar</h1>
                        </button>
                    </div>
                </div>

                {/* Show alert to user */}
                    <div className="mt-4 text-center text-black">
                {showAlert && (
                    <div className="mt-4 text-center bg-[#FCBAAD]  border-gray-200 font-mono rounded-lg shadow-md p-5 w-92 h-28">
                        <div className="text-xl text-center">
                            {successMessageShown
                            ? "Compra concluída com sucesso!"
                            : "Adicione itens ao carrinho para finalizar a compra!"
                            }
                        </div>
                    </div>
                )}
                    </div>
            </div>
        </div>
    )

}
import { Link } from 'react-router-dom';

export const CartButton: React.FC = () => {
    return ( 
        <div className= "px-40 py-4 ">
            <Link to="/cart">
                <button className="bg-[#F2BED1] hover:bg-[#FDCEDF] rounded shadow-md sm:w-12 md:w-16 lg:w-20 sm:h-12 md:h-16 lg:h-20">
                    <img src="src/assets/img/icon-cart.png" alt="cart-icon" className=" block" />
                </button>
            </Link>
        </div>
    )
}
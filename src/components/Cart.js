import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = ()=>{
    const cartItems = useSelector((store)=>store.cart.items)

    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart())
    };
    return(
        <div className="cart text-center m-10 p-10  ">
            <h1 className="font-bold">Cat</h1>
           <div className="w-6/12 m-auto"> 
           <button 
           onClick={handleClearCart}
           className="p-2 m-2 bg-black text-white rounded-lg">Clear cart</button>
            <ItemList items = {cartItems}/>
            </div>
        </div>
    )
}

export default Cart;
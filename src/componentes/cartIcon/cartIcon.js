import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from "react";
import { Context } from "../../Context/CartContext";

const Cart = () =>{
    const { cart } = useContext(Context)
    const productsInCart = cart.reduce((acc, item)=> acc + item.quantity, 0)
    console.log(cart)
    return (
        <>
        <div className="m-4 position-absolute top-0 end-0" id="cart">
            <ShoppingCartIcon color="dark" fontSize="large" />
           {productsInCart !== 0 ? <h4 className="badge text-dark">{productsInCart}</h4> : null} 
        </div>
        </>
    )
}
export default Cart 
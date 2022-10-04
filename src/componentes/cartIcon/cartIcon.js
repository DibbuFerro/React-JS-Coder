import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from "react";
import { Context } from "../../Context/CartContext";

const Cart = () =>{
    const { totalItem} = useContext(Context)
    return (
        <div className="m-4 position-absolute top-0 end-0" id="cart">
            <ShoppingCartIcon color="dark" fontSize="large" />
           <span>{totalItem}</span>
        </div>
    )
}
export default Cart 
import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Cart = () =>{
    return (
        <div className="m-4 position-absolute top-0 end-0" id="cart">
            <ShoppingCartIcon color="dark" fontSize="large" />
        </div>
    )
}
export default Cart
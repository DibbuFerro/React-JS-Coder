import React from "react";
import CartItem from './CartItem.js'
import CartTotal from './CartTotal.js'
import { Context } from "../../Context/CartContext.js";
import { useContext } from "react";

const CartContainerItem =()=>{
    const { cart, clearCart } = useContext (Context)
    return (
    <> 
        <div >
        <table className="table container-md">
            <thead>
                <tr>
                    <th>Product Image</th>
                    <th>Product Name</th>
                    <th className="text-center">Quantity</th>
                    <th className="text-center">Subtotal</th>
                    <th className="text-center"><button className="btn btn-sm btn-outline-danger" onClick={clearCart}>Clear Cart</button></th>
                </tr>
            </thead>
            <tbody>
                <CartItem />
            </tbody>
        
            <CartTotal/></table>
        </div>
        
    </>
    )
}
export default CartContainerItem
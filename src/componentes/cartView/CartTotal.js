import React from "react";
import {Context} from '../../Context/CartContext'
import { useContext } from "react";

const CartTotal=()=>{
    const { cart } = useContext(Context)
    const total =cart.reduce((acc, item) => {
        return acc + (item.item.price * item.quantity)
    }, 0)

    return(
        <>
            <tfoot className="bg-dark text-light rounded" id='tfoot'>
                <td colSpan="2"></td>
                <td > <h3>Total</h3></td>
                
                <td>{total.toFixed(2)}</td>
                <td> <button className="btn btn-sm btn-outline-success rounded">Finalizar Compra</button> </td>
            </tfoot>
        </>
    )
}
export default CartTotal


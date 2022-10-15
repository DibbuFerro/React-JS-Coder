import React from "react";
import {Context} from '../../Context/CartContext'
import { useContext } from "react";
import { Link } from "react-router-dom";




const CartTotal=()=>{
    const { total } = useContext(Context)
   


    return(
        <>
            <tfoot className="bg-dark text-light rounded" id='tfoot'>
                <td colSpan="2"></td>
                <td > <h3>Total</h3></td>
                
                <td>$ {total.toFixed(2)}</td>
                <td> <button className="btn btn-sm btn-outline-success rounded"><Link to='/checkOut'>Finalizar Compra</Link></button> </td>
            </tfoot>
        </>
    )
}
export default CartTotal


import React from "react";

const CartTotal=()=>{
    return(
        <>
            <tfoot className="bg-dark text-light">
                <td colSpan="2"></td>
                <td > <h3>Total</h3></td>
                
                <td>$289.68</td>
                <td> <button className="btn btn-sm btn-outline-success rounded">Finalizar Compra</button> </td>
            </tfoot>
        </>
    )
}
export default CartTotal


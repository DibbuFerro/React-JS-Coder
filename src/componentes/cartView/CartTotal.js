import React from "react";
import {Context} from '../../Context/CartContext'
import { useContext } from "react";
import { Link } from "react-router-dom";




const CartTotal=()=>{
    const { total } = useContext(Context)
   

    /*const [datosComprador, setDatosComprador]= useState({})
    const finalizarCompra=()=>{
        const ventasCollection = collection (db, "sells")
        addDoc (ventasCollection,{
            comprador : datosComprador,
            items: cart,
            date: serverTimestamp(),
            total: `$${total}`

        })
        .then (result=>{
            console.log(result.id);
            clearCart()

        })


    }
    const actualizarStock =()=>{
        const updateStock = doc (db, "products", id)
        updateDoc(updateStock, {stock:50})

    }*/


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


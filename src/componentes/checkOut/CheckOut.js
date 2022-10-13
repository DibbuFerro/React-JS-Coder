import React from "react";
import Form from "react-bootstrap/Form"
import InputGroup from 'react-bootstrap/InputGroup';
import {Context} from '../../Context/CartContext'
import { useState, useContext } from "react";
import {db} from '../../firebase/firebase'
import {collection, addDoc, serverTimestamp, doc, updateDoc} from 'firebase/firestore'
import { Link} from "react-router-dom";

const CheckOut=()=>{
    
    const {total, cart, clearCart}= useContext(Context)

    const [comprador, setComprador]= useState({})
    const [ventaID, setVentaID]= useState('')
    
 
    const datosComprador = (e)=>{
        setComprador({
            ...comprador,
            [e.target.name]:e.target.value
        })
    }
    const finalizarCompra=(e)=>{
        e.preventDefault ()
        if(Object.values(comprador).length !==3){
        }else{
            const ventasCollection = collection (db, "sells")
            addDoc (ventasCollection,{
            comprador,
            items: cart,
            date: serverTimestamp(),
            total: `$${total}`
        })
        .then (result=>{
            setVentaID(result.id); 
            cart.forEach(producto => {
                actualizarStock (producto)
            });
            clearCart()

        })
    }
}
   const actualizarStock =(producto)=>{
        const updateStock = doc (db, "products", producto.item.id)
        updateDoc(updateStock, {stock: (producto.item.stock - producto.quantity)})

    }

    return (
        <>

            <div>

                {!ventaID ?

                    <div className="container-xl text-center">
                        <h2>¡Casi terminamos!</h2>
                        <h4>Por favor complete todos los campos</h4>


                        <InputGroup className="mb-3">
                            <InputGroup.Text>Nombre y Apellido</InputGroup.Text>
                            <Form.Control aria-label="First name" name="Nombre" onChange={datosComprador} />
                            <Form.Control aria-label="Last name" name="Apellido" onChange={datosComprador}/>
                        </InputGroup>
                        <Form.Control type="email" placeholder="Email" name="Email" onChange={datosComprador}/>.
                        <button className="btn btn-outline-dark mt-4" onClick={finalizarCompra}>Finalizar</button>
                    </div>
            :
                    <div className="container-fluid text-center pt-5 mt-5">
                        <h2>Muchas gracias por su compra!</h2>
                        <h4>Su orden de compra es : {ventaID}</h4>
                        <button className="btn btn-outline-dark mt-4"> <Link to ='/'>Volver al Inicio</Link> </button>
                    </div> 
                }
            </div>
        </>
    )
}
export default CheckOut
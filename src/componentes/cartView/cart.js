import React from "react";
import CartContainerItem from './CartContainerItem.js'
import {Context} from '../../Context/CartContext'
import { useContext } from "react";
import { Link } from "react-router-dom";


const Cart=()=>{

    const {cart} =useContext( Context)
    const productsInCart = cart.reduce((acc, item)=> acc + item.quantity, 0)

    return(
        <>
        {productsInCart !== 0 ? <CartContainerItem /> : <div className="container-md text-center mt-5 pt-5"><h2>Aun no hay productos en el carrito. Selecciona algun producto <Link to='/' id="CartLink">aqui!</Link></h2></div>}
        </>
    )
}
export default Cart
import React from "react";
import { useContext } from "react";
import { Context } from "../../Context/CartContext";



const CardItem =()=>{

    const {cart, removeItem}= useContext(Context)
    
    return(
        
        <>  {cart.map((producto)=>{
            return <tr key={producto.item.id}>
                    <td><img src={producto.item.image} alt="Product" className="img-fluid w-25"></img></td>
                    <td> <h4 className="product-title">{producto.item.title}</h4></td>           
                    <td className="text-center">
                        <h4>{producto.quantity}</h4>
                    </td>
                    <td className="text-center text-lg text-medium">{(producto.item.price * producto.quantity)}</td>
                    <td className="text-center"><button onClick={(id)=>removeItem(producto.item.id)} className="rounded btn btn-sm btn-outline-danger">X</button></td>
                </tr>
        })}
                
                



        </>
    )
}
export default CardItem 
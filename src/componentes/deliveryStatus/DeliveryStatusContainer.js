import { useState} from "react";
import React from "react";

//import DeliveryStatusView from "./DeliveryStatusView";
import { Link } from "react-router-dom";



const DeliveryStatusContainer =()=>{

    const [codigo, setCodigo]=useState("")
    
    const datosVentas = (e)=>{
        setCodigo({
            [e.target.name]:e.target.value
        })
    }

    return (
        <>{}
            <div className="Container-xl text-center bg-dark mt-2">
                <h2>Por favor ingrese su codigo de compra</h2>
                <input type="text" name="id" onChange={datosVentas}/>
                <button className="btn btn-ligth"> <Link to={`/deliveryStatus/view/${codigo.id}`}>Buscar</Link></button>
            </div>
        </>
    )
}
export default DeliveryStatusContainer
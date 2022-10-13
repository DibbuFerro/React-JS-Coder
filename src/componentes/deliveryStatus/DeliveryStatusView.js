import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {db} from '../../firebase/firebase'
import {doc, getDoc, collection} from "firebase/firestore"
import { useEffect } from "react";

const DeliveryStatusView=()=>{

    let {codigoDeVenta}=useParams()
    const [loading, setLoading]=useState(true)

    const [infoVenta, setInfoVenta]= useState({})
    useEffect(()=>{
        const sellsCollection= collection(db, "sells")
        let selectSells = doc(sellsCollection, codigoDeVenta)
        getDoc(selectSells)
        .then ((resultado)=>{
            setInfoVenta(
                {
                    ...resultado.data()
                }
            )
            
        }).then(()=>{
            setLoading(false)
        })
    },[]) 
    //Crear un if ternario para cargar la informacion de infoVenta una vez que ya alla llegado la informacion. luego hacer un map con infoVenta.items, para mostrar toda la informacion pertinente. LUEGO TERMINAR DE CREAR UN UI BONITAAAAAAA

    return(

        <>  
        <div className="Container-xl text-center bg-light pt-5 mt-5">
            
        <p>Email: {infoVenta.comprador.Email}</p>
            <p>Nombre: {infoVenta.comprador.Nombre}</p>
            <p>Apellido: {infoVenta.comprador.Apellido}</p>
            <h3>Pedido</h3>
            <p>{infoVenta.items[0].item.description}</p><p>{infoVenta.items[0].quantity}</p>
            <p>{infoVenta.items[1].item.description}</p><p>{infoVenta.items[1].quantity}</p>
            <p>{infoVenta.items[2].item.description}</p><p>{infoVenta.items[2].quantity}</p>
            <p>Total: {infoVenta.total}</p>



        </div>


        </>
    )
}
export default DeliveryStatusView
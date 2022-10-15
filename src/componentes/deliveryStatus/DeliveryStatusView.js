import React from "react";
import { useState } from "react";
import {db} from '../../firebase/firebase'
import {doc, getDoc, collection} from "firebase/firestore"
import { useEffect } from "react";
import { Context } from "../../Context/CartContext";
import { useContext } from "react";

const DeliveryStatusView=()=>{
    const {idVenta} = useContext(Context)


    const [loading, setLoading]=useState(true)

    const [infoVenta, setInfoVenta]= useState({})
    useEffect(()=>{
        const sellsCollection= collection(db, "sells")
        let selectSells = doc(sellsCollection, idVenta)
        getDoc(selectSells)
        .then ((resultado)=>{
            setLoading(false)
            setInfoVenta(
                {
                    ...resultado.data()
                }
            )
            
        })
    },[])
    //Crear un if ternario para cargar la informacion de infoVenta una vez que ya alla llegado la informacion. luego hacer un map con infoVenta.items, para mostrar toda la informacion pertinente. LUEGO TERMINAR DE CREAR UN UI BONITAAAAAAA

    return(

        <>  
        {!loading?(

                <div className="Container-md  bg-light pt-5 mt-5">
                    <div className="container-xxl  ">
                        <h1 className="text-center pb-4">Esta es la informacion de tu compra</h1>
                        <div className="row container-fluid">

                            <div className="col-6 text-center">
                                <table className="table table-dark">
                                <thead>
                                    <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Datos Comprador</th>
                                    
                                    
                                    </tr>
                                </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">Email</th>
                                        <td>{infoVenta.comprador.Email}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Nombre</th>
                                        <td>{infoVenta.comprador.Nombre}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Apellido</th>
                                        <td>{infoVenta.comprador.Apellido}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                    
                            <div className="col-6 text-center">
                                <table className="table table-dark">
                                    <thead>
                                        <tr>
                                            <th scope="col">Items</th>
                                            <th scope="col">Cantidad</th>
                                        </tr>
                                    </thead>
                            
                                    <tbody>
                                        {infoVenta.items.map((item)=>{
                                            return <tr key={item.item.description}>
                                                <td className="col">{item.item.description}</td>
                                                <td className="col">{infoVenta.items[0].quantity}</td>
                                            </tr>
                                        })}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th scope="row">Total</th>
                                            <td>{infoVenta.total}</td>
                                        </tr>
                                    </tfoot>
                                </table>
                                
                            </div>
                        </div>
                    </div>

                </div>

        ):(
            <div className="Container-fluid text-center"> <h1>Estamos cargando la informacion</h1></div>
        )
    }
        </>
    )
}
export default DeliveryStatusView
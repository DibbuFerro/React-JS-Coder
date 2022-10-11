import React, { useEffect, useLayoutEffect, useState } from "react";
import ItemDetail from '../itemDetail/itemDetail'
import { useParams } from "react-router-dom";
import {db} from "../../firebase/firebase"
import {doc, getDoc, collection} from "firebase/firestore"

const ItemDetailContainer =()=>{

   let {IdProducto}= useParams()
    

    const[product, setProduct]=useState({})
        useEffect(()=>{

            const productCollection= collection(db, "products")
            let selectProduct = doc(productCollection, IdProducto)
            getDoc(selectProduct)
            .then ((resultado)=>{
                setProduct(
                    {
                        id: resultado.id,
                        ...resultado.data()
                    }
                )
            })
        },[])

   

    return(
        <>
        <ItemDetail item={product}/>    
        </>
    )
}
export default ItemDetailContainer  
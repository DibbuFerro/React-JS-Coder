import React, { useEffect, useLayoutEffect, useState } from "react";
import ItemDetail from '../itemDetail/itemDetail'
import { useParams } from "react-router-dom";

const ItemDetailContainer =()=>{

   let {IdProducto}= useParams()
    

    const[product, setProduct]=useState({})
        useEffect(()=>{
            fetch(`https://fakestoreapi.com/products/${IdProducto}`)
                .then(res=>res.json())
                .then(json=>{
                    setProduct(json)
                })
        },[])

   

    return(
        <>
        <ItemDetail item={product}/>    
        </>
    )
}
export default ItemDetailContainer
import React, { useEffect, useLayoutEffect, useState } from "react";
import ItemDetail from '../itemDetail/itemDetail'


const ItemDetailContainer =()=>{

const[product, setProduct]=useState({})
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/1')
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
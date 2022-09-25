import React from "react";
import Item from './item.js'
import { useState, useEffect } from "react";
import Spinner from '../utilidades/spinner'
import { useParams } from "react-router-dom";

 const Cards =()=>{  
     
    const [productos, setProductos]=useState([])
    let {IdCategoria}=useParams()
    const URL_BASE="https://fakestoreapi.com/products"
    const URL_CATEGORY="https://fakestoreapi.com/products/category/"

    useEffect(()=>{
        fetch(IdCategoria === undefined ? URL_BASE : `${URL_CATEGORY}${IdCategoria}`)
            .then(res=>res.json())
            .then(json=>{
                setProductos(json)
            })
    },[IdCategoria])
   
    const [cargando,setCargando]= useState(true)
    const [products, setProducts]= useState([])
    const promesa= new Promise((res, rej)=>{
        res(productos)
    }) 
    useEffect(()=>{
        promesa
        
        .then((data)=>{
            setTimeout(() => {
                setCargando(false)
                setProducts(data)
            }, 1500);
            ;
        })
        .catch(()=>{
            console.log("Algo salio mal")
        })
    },[])

    return(
        <div className="card-Group row my-4" id="grupoCards">
            
            {cargando ? <Spinner/> : 

                <Item items={productos}/>
            }
            
        </div>
    )
 }
 export default Cards
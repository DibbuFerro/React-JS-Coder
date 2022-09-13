import React from "react";
import Item from './item.js'
import { useState, useEffect } from "react";
import Spinner from '../utilidades/spinner'


 const Cards =()=>{

    const productos=[
        {id:0, stock:5, nombre: "Producto1", precio:2000,descripcion:"Breve descripcion del producto"},
        {id:1, stock:6, nombre: "Producto2", precio:5000,descripcion:"Breve descripcion del producto"},
        {id:2, stock:2, nombre: "Producto3", precio:200,descripcion:"Breve descripcion del producto"},
        {id:3, stock:1, nombre: "Producto4", precio:6600,descripcion:"Breve descripcion del producto"},
        {id:4, stock:7, nombre: "Producto5", precio:100,descripcion:"Breve descripcion del producto"},
        {id:5, stock:8, nombre: "Producto6", precio:1000,descripcion:"Breve descripcion del producto"},
        {id:6, stock:2, nombre: "Producto7", precio:1200,descripcion:"Breve descripcion del producto"},
        {id:7, stock:2, nombre: "Producto8", precio:4000,descripcion:"Breve descripcion del producto"}
        
    ]
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
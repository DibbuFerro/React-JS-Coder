import React, {useEffect} from "react";
import ItemCount from '../itemCount/itemCount.js'
import ProductoImagen from '../../assets/producto.jpg'
import { useState } from "react";

const Card =()=>{

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
    const promesa= new Promise((res, rej)=>{
        res(productos)
    })

    const [products, setProducts]= useState([])

    useEffect(()=>{
        promesa
        "cargando"
        .then((data)=>{
            setTimeout(() => {
                setProducts(data)
            }, 1500);
            ;
        })
        .catch(()=>{
            console.log("Algo salio mal")
        })
    },[])

    return(
        <>
        {products.map((product)=>{
            return <div key={product.id} className="card col border-danger">
                    <img src={ProductoImagen} className="card-img-top" alt="producto"></img>
                        <div className="card-header">{product.nombre}</div>
                        <div className="card-body">{product.descripcion}</div>
                        <div className="card-body text-danger">
                            <h5 className="card-title">${product.precio}</h5>
                            <p className="card-text"></p>
                            
                                <ItemCount stock={4}/>
                            
                        </div>
                    </div>
        })}
        </>
    )
}
export default Card
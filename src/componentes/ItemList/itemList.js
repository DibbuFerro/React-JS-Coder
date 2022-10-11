import React from "react";
import Item from './item.js'
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { db } from '../../firebase/firebase'
import {getDocs, collection, query, where} from 'firebase/firestore'

 const Cards =()=>{  
     
    const [productos, setProductos]=useState([])
    let { IdCategoria }=useParams()
    console.log(IdCategoria);

    

    useEffect(()=>{

        const productsCollection = collection(db, 'products');
        const productCategory=query(productsCollection, where('category','==', `${IdCategoria}`))
	 let url= ( IdCategoria === undefined ? productsCollection : productCategory)
        getDocs (url)
        .then((data)=>{
            const productList =data.docs.map((product)=>{
                return{
                    ...product.data(),
                    id: product.id
                } 
            })
            setProductos(productList)
        })
    },[IdCategoria]) 
   
    return(
        <div className="card-Group row my-4" id="grupoCards">
            <Item items={productos}/>
        </div>
    )
 }
 export default Cards
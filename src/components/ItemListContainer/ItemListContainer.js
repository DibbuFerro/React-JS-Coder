import React from "react";


const greeting="Bienvenido a nuestro Ecommerce"

const ItemListContainer =() =>{
    return(      
        <h2 style={style.greeting}>{greeting}</h2>
    )
}
export default ItemListContainer

const style={
    greeting:{
        margin:'100px',
    }
}
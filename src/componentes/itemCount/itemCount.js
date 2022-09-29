import React, {useState} from "react";



const ItemCount =({initial, stock, onAdd})=>{

const [contador, setContador] = useState(initial)
const sumar=()=>{
    if (contador < stock)
    setContador(contador + 1)
    
}
const restar=()=>{
    if (contador > initial){
        setContador(contador -1)
        
    }
}
const comprar =()=>{
    onAdd(contador)
}



    return(
        <>
            <section className="card-footer d-flex justify-content-center ">
                
                <button className="btn btn-dark btn-md mx-1  rounded-circle" type="button" onClick={sumar}>+ </button>
                <span className="px-5 align-self-center bg-dark p-1  text-light" > {contador}</span>
                <button className="btn btn-dark  btn-md mx-1 rounded-circle" type="button" onClick={restar}> - </button>
            
            <button className="btn btn-dark align-self-center ms-4" type="button" onClick={comprar} >Agregar al carrito</button></section>
        </>
    )
}
export default ItemCount
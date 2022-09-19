import React, {useState} from "react";
import Swal from 'sweetalert2'


const ItemCount =({stock})=>{

const [contador, setContador] = useState(1)
const sumar=()=>{
    if (contador < stock)
    {setContador(contador + 1)
    console.log(contador)}
}
const restar=()=>{
    if (contador > 0){
        setContador(contador -1)
        console.log(contador)
    }
}
const agregar=()=>{
    Swal.fire(
        'Genial!',
        `Haz agregado ${contador} productos a tu carrito`,
        )
}


    return(
        <>
            <section className="card-footer d-flex justify-content-center ">
                <button className="btn btn-outline-danger btn-sm  " type="button" onClick={sumar}>+</button>
                <span className="px-5 align-self-center bg-danger p-1  text-light" > {contador}</span>
                <button className="btn btn-outline-danger  btn-sm " type="button" onClick={restar}>-</button>
            
            <button className="btn btn-danger align-self-center ms-4" type="button" onClick={agregar}>Agregar al carrito</button></section>
        </>
    )
}
export default ItemCount
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar =()=>{

    const categorias=[
        { id:0, nombre:"D&D", ruta:'/categoria/dnd'},
        { id:1, nombre:"Pathfinder", ruta:'/categoria/pathfinder'}, 
        { id:2, nombre:"Call of Cthulhu", ruta:"/categoria/cthulhu"},
        { id:3, nombre:"Otros", ruta:"/categoria/otros"}
    ]

    return(
        <>
        <ul className="container-xl d-flex justify-content-around">
            {categorias.map((categoria)=>{
                return <Link key={categoria.id} className="align-self-end" to={categoria.ruta}>{categoria.nombre}</Link>
            })} 
        </ul>
        </>
    )
}
export default Navbar 
 
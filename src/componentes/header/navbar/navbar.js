import React from "react";

const Navbar =()=>{

    const categorias=[
        { id:0, nombre:"Cosas Innecesarias"},
        { id:1, nombre:"Cosas de adulto responsable"}, 
        { id:2, nombre:"Cosas muy innecesarias"}
    ]

    return(
        <>
        <ul className="nav">
            {categorias.map((categoria)=>{
                return <li key={categoria.id} className="nav-item "><a className="nav-link" href="/#">{categoria.nombre}</a></li>
            })}
        </ul>
        </>
    )
}
export default Navbar

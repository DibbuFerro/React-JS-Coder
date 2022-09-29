import React from "react";
import { Link } from "react-router-dom";

const FinalCompra =()=>{
    return(
        <>
            <Link to='/cart'>
                <button className="btn btn-dark align-self-center ms-4" type="button">Finalizar Compra</button>
            </Link>
        </>
    )
}

export default FinalCompra
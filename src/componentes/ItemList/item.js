import React, {useEffect} from "react";
import ItemCount from '../itemCount/itemCount.js'
import ProductoImagen from '../../assets/producto.jpg'



const Card =({items})=>{

  

    return(
        <>
        {items.map((product)=>{
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
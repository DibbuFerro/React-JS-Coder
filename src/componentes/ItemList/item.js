import React, {useEffect} from "react";
import ItemCount from '../itemCount/itemCount.js'
import ProductoImagen from '../../assets/producto.jpg'



const Card =({items})=>{

  

    return(
        <>
        {items.map((product)=>{
            return <div key={product.id} className="card col border-danger">
                    <a href={product.title}><img src={product.image} className="card-img-top img-fluid" alt="producto"></img></a>
                        <div className="card-header">{product.title}</div>
                        <div className="card-body text-danger">
                            <h5 className="card-title">${product.price}</h5>
                            <p className="card-text"></p>                              
                        </div>
                    </div>
        })}
        </>
    )
}
export default Card
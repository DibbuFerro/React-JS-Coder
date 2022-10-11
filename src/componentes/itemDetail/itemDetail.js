import React, { useContext, useState } from "react";
import ItemCount from "../itemCount/itemCount";
import FinalCompra from '../../componentes/finalCompra/finalCompra.js'
import {Context} from '../../Context/CartContext'


const ItemDetail =({item})=>{
    
    const [isButtonPressed, setIsButtonPressed]=useState(false)
    const {addItem}=useContext(Context)

    const onAdd= (count) => {
        setIsButtonPressed (true)
        addItem(item ,count)
    }
    

    return(
        <>  
            <div className="Container-lg row mt-5">  
                <div className="row bg-light offset-3 col-6 p-2 rounded mb-2">
                    <div className="col-6">
                        <img src={item.image} className="w-100" alt="Foto-1" />
                    </div>
                    <div className="col ">
                        <div className="container-xl text-center">
                            <h3>{item.title}</h3>
                            <div>{item.description}</div>
                            <h2 className="m-3">{item.price}$</h2>

                                {!isButtonPressed?(
                                    <ItemCount initial={1} stock={4} onAdd={onAdd} />
                                    ):(
                                    <FinalCompra/>
                                )}    
                        </div>
                    </div>
                </div>
            </div>
        </>
)}
export default ItemDetail



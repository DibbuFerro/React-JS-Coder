import React from "react";
import ItemCount from "../itemCount/itemCount";

const ItemDetail =({item})=>{    
    console.log(item)
    return(
        <>  
            <div className="Container-xl row">  
                <div className="row bg-light offset-2 col-8 p-2 rounded mb-2">
                    <div className="col-6">
                        <img src={item.image} className="w-50" alt="Foto-1" />
                        <img src={item.image} className="w-50" alt="Foto-2" />
                    </div>
                    <div className="col ">
                        <div className="container-xl text-center">
                            <h3>{item.title}</h3>
                            <div>{item.description}</div>
                            <h2 className="m-3">{item.price}$</h2>

                          <ItemCount stock={4}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
)}
export default ItemDetail



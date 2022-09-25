import React from "react";
import ItemList from '../ItemList/itemList.js'

const Content =()=>{
    
    const greeting="Nuestros Productos."



    return(
        <div className="container-xxl text-center my-5">
            <h2>{greeting}</h2>
            <div className="container-xl">
                <ItemList/>
            </div>
        </div>
    )
}
export default Content 
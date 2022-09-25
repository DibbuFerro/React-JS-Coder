import React from "react";
import {
     BrowserRouter,
     Routes,
     Route
 } from "react-router-dom";
import Header from "./componentes/header/header.js"
import ItemListContainer from './componentes/ItemListContainer/itemListContainer.js'
import ItemDetailContainer from './componentes/ItemDetailContainer/itemDetailContainer.js'
import Cart from './componentes/cartView/cart'



const App =()=>{
    return(
        <>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='categoria/:IdCategoria' element={<ItemListContainer/>}/>
                <Route path="producto/:IdProducto" element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </BrowserRouter>
        </>
        
    )
}
export default App
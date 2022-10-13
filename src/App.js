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
import CartProvider from './Context/CartContext.js'
import CheckOut from "./componentes/checkOut/CheckOut";
import DeliveryStatusContainer from "./componentes/deliveryStatus/DeliveryStatusContainer.js";
import DeliveryStatusView from "./componentes/deliveryStatus/DeliveryStatusView.js";



const App =()=>{
    return(
        <>
        
        <BrowserRouter>
            <CartProvider>
                <Header/>
                <Routes>
                    <Route path='/' element={<ItemListContainer/>}/>
                    <Route path='categoria/:IdCategoria' element={<ItemListContainer/>}/>
                    <Route path="producto/:IdProducto" element={<ItemDetailContainer/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/checkOut" element ={<CheckOut/>}/>
                    <Route path="/deliveryStatus" element={<DeliveryStatusContainer/>}/>
                    <Route path="deliveryStatus/view/:codigoDeVenta" element={<DeliveryStatusView/>} />
                </Routes>
            </CartProvider>
        </BrowserRouter>
        </>
        
    )
}
export default App
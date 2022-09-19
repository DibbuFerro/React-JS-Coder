import React from "react";
import Header from "./componentes/header/header.js"
import ItemListContainer from './componentes/ItemListContainer/itemListContainer.js'
import ItemDetailContainer from './componentes/ItemDetailContainer/itemDetailContainer.js'


const App =()=>{
    return(
        <>
        <Header/>
        <ItemListContainer/>
        <ItemDetailContainer/>
        </>
        
    )
}
export default App
import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Navbar from './navbar/navbar.js'

const Header = ()=>{
    return(
        <>
        <div className="navbar container-flex bg-info border-bottom border-danger" >
            <div className="container-xl">
                <h1 id="nombreSitio">PrettyShop</h1>
            <Navbar/>
            <ShoppingCartIcon color="secondary" fontSize="large" />
            </div>   
        </div>
        </>
    )
}
export default Header
import React from "react"
import Navbar from './nav/NavBar'
import logo from '../../assets/logo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import "./Header.css"

const Header =()=>{
    return(
        <header>
            <img src={logo} alt="Logo" />
            <h1> E-commerce</h1>
            <Navbar/>        
            <ShoppingCartIcon color="secondary" fontSize="large"/>
        </header>
    )
}   
export default Header 
import React from "react";
import { Link } from "react-router-dom";
import Navbar from './navbar/navbar.js'
import Logo from  '../../assets/logo.png'
import Cart from '../cartIcon/cartIcon.js'
const Header = ()=>{
    
    return(
        <>
        <div className=" container-flex bg-dark border-bottom border-danger" >
            <span>
                <Link to='cart'>
                    <Cart/>
                </Link>
            </span>
            <span><button className="btn btn-light mt-5 ms-5 rounded-pill" id="buys"><Link to="/deliveryStatus">Mis compras</Link></button></span>
            <div className="container-xl">
                <Link to='/'>
                <img src={Logo} className=" position-relative top-0 start-50 translate-middle-x p-4 " width='200px'></img>
                </Link>
                <Navbar />
            </div>   
        </div>
        </>
    )
}
export default Header
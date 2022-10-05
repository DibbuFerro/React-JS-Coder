import React , {createContext,  useState} from "react";


export const Context = createContext ()


const CartProvider =({children})=>{

    const [cart, setCart] = useState ([])
           
    
    const clearCart = () => setCart([])
    const removeItem =(id)=>{
        const cartFilter = cart.filter((item)=>{
            console.log(item)
            return item.item.id !==id
        })
        setCart(cartFilter)
    }
    
    
    
    const addItem =(item, quantity)=>{
        const isInCart = cart.findIndex(itemCart=>itemCart.item.id ===item.id)
        if (isInCart !== -1){
            const newCart = cart.filter(item => item !== cart[isInCart])
            setCart([{item, quantity}, ...newCart])
        }else{
            setCart ([... cart, {item, quantity}])
        }
    }


   
    
    

    return(
        <>
            <Context.Provider value={{cart, addItem, removeItem, clearCart}}>
                {children}
            </Context.Provider>
        </>
    )
}

export default CartProvider  


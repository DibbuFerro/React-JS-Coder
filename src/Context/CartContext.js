import React , {createContext, useState} from "react";


export const Context = createContext ()


const CartProvider =({children})=>{

    const [cart, setCart] = useState ([])

    const addItem = (item, quantity) =>{
        if (isInCart(item.id)){
            //Si esta en el cart hay que sumarle la cantidad al producto ya existente. Ahora la pregunta es ... COMO?
        }else{
            setCart([...cart,{item, quantity}])
        }

    }
    const removeItem = (id) =>{
       const cartFilter = cart.Filter((item)=>{
        return item.id !==id
       })
       setCart(cartFilter)
    }
    const clear = () =>{
        setCart([])
    }
    const isInCart = (id) =>{
        cart.some((item)=>{
            return item.id===id
        })
        
    }

    return(
        <>
            <Context.Provider value={{cart, addItem, removeItem, clear, isInCart}}>
                {children}
            </Context.Provider>
        </>
    )
}

export default CartProvider 
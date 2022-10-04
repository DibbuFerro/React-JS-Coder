import React , {createContext,  useState} from "react";


export const Context = createContext ()


const CartProvider =({children})=>{

    const [cart, setCart] = useState ([])
    const [productsInCart, setProductsInCart] = useState(0);
    const [totalItems, setTotalItems]=useState (0)

    
    //const isInCart = id => cart.some(item => item.item.id === id)
    const clearCart = () => setCart([])
    const removeItem =(id)=>{
        const cartFilter = cart.filter((item)=>{
            console.log(item)
            return item.item.id !==id
        })
        setCart(cartFilter)
    }
    /*setProductsInCart([{...productsInCart}, cart.quantity])
    const itemsCantidades = productsInCart.reduce(
        (a, b) => a + b, 0 ) 
    setTotalItems(itemsCantidades)*/
    
    
    const addItem =(item, quantity)=>{
        const isInCart = cart.findIndex(itemCart=>itemCart.item.id ===item.id)
        if (isInCart !== -1){
            const newCart = cart.filter(item => item !== cart[isInCart])
            setCart([{item, quantity}, ...newCart])
        }else{
            setCart ([... cart, {item, quantity}])
        }
    }


   /* const addItem = (item, quantity) =>{
        if (isInCart(item.id)){
            const newCart =cart.map (cartElement =>{
                if (cartElement.id ===item.id){
                    
                    return{...cartElement, quantity}
                    
                }else return cartElement
            })
            setCart(newCart)
        }else{
            
            setCart([...cart,{item, quantity}])         
        }
    }*/
    
    

    return(
        <>
            <Context.Provider value={{cart, addItem, removeItem, clearCart,totalItems}}>
                {children}
            </Context.Provider>
        </>
    )
}

export default CartProvider 


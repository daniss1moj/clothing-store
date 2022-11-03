import { createContext, useState } from "react";
import { useEffect } from "react";
export const CartContex = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    cartCount: 0
})

const isItemInCart = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem)=> {
        return cartItem.id === productToAdd.id
    })

    if (existingCartItem) {
        return cartItems.map((cartItem)=> {
           return  cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        })
    }

    return [...cartItems, {...productToAdd, quantity: 1}]
} 

export const CartProvider = ({children}) => {

    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)

    useEffect(()=> {
        const newCartCount = cartItems.reduce((total, cartItem)=> total+=cartItem.quantity , 0)    
        setCartCount(newCartCount)
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(isItemInCart(cartItems, productToAdd))
    }

    const removeItemFromCart = () => {

    }

    const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount}
    return (
        <CartContex.Provider value={value}>
            {children}
        </CartContex.Provider>
    )
}
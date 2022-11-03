import { createContext, useState } from "react";
import { useEffect } from "react";
export const CartContex = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    removeItemFromCheckout: () => {},
    cartCount: 0,
    cartTotal: 0
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

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find((cartItem)=> {
        return cartItem.id === cartItemToRemove.id
    })

    if(existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem)=> {
            return cartItem.id != cartItemToRemove.id
        })
    } 

    return cartItems.map((cartItem)=> {
        return  cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1}
         : cartItem
     })
}

const removeCheckoutItem = (cartItems, cartItemToRemove) => {
    return cartItems.filter((cartItem)=> {
        return cartItem.id != cartItemToRemove.id
    })
}



export const CartProvider = ({children}) => {

    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(()=> {
        const newCartCount = cartItems.reduce((total, cartItem)=> total+=cartItem.quantity , 0)    
        setCartCount(newCartCount)
    }, [cartItems])

    useEffect(()=> {
        const newTotalPrice = cartItems.reduce((total, curr)=> {
            return total+= Math.round(curr.price * curr.quantity)
        }, 0)
       setCartTotal(newTotalPrice)
    },[cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(isItemInCart(cartItems, productToAdd))
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove))
    }

    const removeItemFromCheckout = (productToRemove) => {
        setCartItems(removeCheckoutItem(cartItems, productToRemove))
    }

    const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, removeItemFromCart, removeItemFromCheckout, cartTotal}
    return (
        <CartContex.Provider value={value}>
            {children}
        </CartContex.Provider>
    )
}
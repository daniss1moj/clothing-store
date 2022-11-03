import Button from '../button/Button';
import { useContext } from 'react';
import { CartContex } from '../../contexts/cart-context'
import { useNavigate } from 'react-router-dom';
import CartItem from '../cart-item/CartItem';
import './cart-dropdown.scss'
const CartDropdown = ({onClick}) => {
    const {cartItems, setIsCartOpen} = useContext(CartContex)
    const navigate = useNavigate()

    const goToCheckoutHandler = () => {
        navigate('/checkout')
        setIsCartOpen(false)
    }

    return ( 
        <div onClick={onClick} className='cart-dropdown-container'>
            <div className="cart-items">
                {cartItems.map((cartItem)=> {
                    return <CartItem key={cartItem.id} {...cartItem}/>
                })}
            </div>
            <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
        </div>
     );
}
 
export default CartDropdown;
import Button from '../button/Button';
import { useContext } from 'react';
import { CartContex } from '../../contexts/cart-context';
import CartItem from '../cart-item/CartItem';
import './cart-dropdown.scss'
const CartDropdown = ({onClick}) => {
    const {cartItems} = useContext(CartContex)
    return ( 
        <div onClick={onClick} className='cart-dropdown-container'>
            <div className="cart-items">
                {cartItems.map((cartItem)=> {
                    return <CartItem key={cartItem.id} {...cartItem}/>
                })}
            </div>
            <Button>Go to cart</Button>
        </div>
     );
}
 
export default CartDropdown;
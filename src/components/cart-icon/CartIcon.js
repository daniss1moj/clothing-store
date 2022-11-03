import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.scss'
import { CartContex } from '../../contexts/cart-context';
import { useContext } from 'react';
const CartIcon = ({onClick}) => {
    const {cartCount} = useContext(CartContex)
    return ( 
        <div  onClick={onClick} className='cart-icon-container'>
            <ShoppingIcon className="shopping-icon"/>
            <span className='item-count'>{cartCount}</span>
        </div>
     );
}
 
export default CartIcon;
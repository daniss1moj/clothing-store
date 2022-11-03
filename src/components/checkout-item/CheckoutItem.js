import { useContext } from 'react';
import { CartContex } from '../../contexts/cart-context';
import './checkout-item.scss'
const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem
    const {removeItemFromCheckout, removeItemFromCart, addItemToCart} = useContext(CartContex)
    return ( 
        <div className='checkout-item-container'>
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className="arrow" onClick={()=>removeItemFromCart(cartItem)}>
                    &#10094;
                </div>
                <div className="value">{quantity}</div>
                <div className="arrow" onClick={()=> addItemToCart(cartItem)}>
                    &#10095;
                </div>
            </span>
            <span className='price'>${price}</span>
            <div className="remove-button" onClick={()=> removeItemFromCheckout(cartItem)}>&#10005;</div>
        </div>

     );
}
 
export default CheckoutItem;
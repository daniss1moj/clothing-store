import { useContext } from 'react';
import { CartContex } from '../../contexts/cart-context';
import './product-card.scss'
import Button from '../button/Button';
const ProductCard = ({product}) => {
    const {addItemToCart} = useContext(CartContex)
    const {name, price, imageUrl} = product

    const addProductToCart = () => addItemToCart(product)

    return ( 
        <div className="product-card-container">
            <img src={imageUrl} alt={name} />
            <div className='footer'>
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType="inverted" onClick={addProductToCart}>Add to card</Button>
        </div>
     );
}
 
export default ProductCard;
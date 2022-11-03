import UserContext from "../../../contexts/user-context";
import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import {ReactComponent as Logo} from './crown.svg'
import { signOutUser } from "../../utils/firebase";
import CartIcon from "../../cart-icon/CartIcon";
import CartDropdown from "../../cart-dropdown/CartDropdown";
import { CartContex } from "../../../contexts/cart-context";
import './navigation.scss'
const Navigation = () => {
    const {currentUser} = useContext(UserContext)
    const {isCartOpen,setIsCartOpen} = useContext(CartContex)
    const signOutHandler = async () => {
        await signOutUser()
    }

    return ( 
        <>      
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <Logo/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">Shop</Link>
                    {currentUser ? <span className="nav-link" onClick={signOutHandler}>Sign out</span> :
                    <Link className="nav-link" to="/auth">Sign In</Link>
                    }
                    <CartIcon onClick={()=>setIsCartOpen(!isCartOpen)}/>
                </div>
                {isCartOpen && <CartDropdown/>}
            </div>
            <Outlet/>  
        </>
     );
}
 
export default Navigation;
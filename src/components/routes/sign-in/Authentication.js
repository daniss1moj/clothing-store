import {auth,signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect} from '../../utils/firebase'
import SignUpForm from '../../sign-up-form/SignUpForm'
import SignInForm from '../../sign-in-form/SignInForm'
import './Authentication.scss'
const Authentication = () => {


    const logGoogleUser = async ()=> {
        const {user} = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)
    }



    return ( 
        <div className='auth-container'>
            <SignInForm/>
            <SignUpForm/>
        </div>
     );
}
 
export default Authentication;
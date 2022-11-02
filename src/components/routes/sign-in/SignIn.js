import {auth,signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect} from '../../utils/firebase'
import SignUpForm from '../../sign-up-form/SignUpForm'
const SignIn = () => {


    const logGoogleUser = async ()=> {
        const {user} = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)
    }



    return ( 
        <div>
            <h1>Sign in Page</h1>
            <button onClick={logGoogleUser}> Sign In with Google account</button>
            <SignUpForm/>
        </div>
     );
}
 
export default SignIn;
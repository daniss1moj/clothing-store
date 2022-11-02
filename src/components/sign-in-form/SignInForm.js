import { useState } from "react";
import { auth,signInAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup } from "../utils/firebase";
import FormInput from "../form-input/FormInput";
import Button from "../button/Button";
import './sign-in-form.scss'
const defaultFormField = {
    email: '',
    password: '',
}
const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormField)
    const {email, password} = formFields

    const signInWithGoogle = async ()=> {
        const {user} = await signInWithGooglePopup()
        await createUserDocumentFromAuth(user)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password)
            console.log(response)
            resetFormFields()
        } catch (error) {
            switch(error.code) {
                case 'auth/user-not-found': 
                    alert('Such account doesn`t exist')
                    break
                case 'auth/wrong-password':
                    alert('Wrong password')
                    break
                default:
                    console.log(error.code)
            }
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormFields({...formFields, [name]: value})
    }

    const resetFormFields = () => {
        setFormFields(defaultFormField)
    }
    return ( 
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with ypur email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput type="email" 
                label="Email"
                required 
                name="email"
                value={email}
                onChange={handleChange}    
                />
                <FormInput type="password" 
                label="password"
                required 
                name="password"
                value={password}  
                onChange={handleChange}      
                />
                <div className="buttons-container">
                    <Button type="submit">Sign in</Button>
                    <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google Sign in</Button>
                </div>
            </form>
        </div>
     );
}
 
export default SignInForm;
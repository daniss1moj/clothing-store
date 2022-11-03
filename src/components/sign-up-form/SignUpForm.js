import { useState} from "react";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../utils/firebase";
import FormInput from "../form-input/FormInput";
import Button from "../button/Button";
import './sign-up-form.scss'
const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}
const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormField)
    const {displayName, email, password, confirmPassword} = formFields


    const handleSubmit = async (event) => {
        event.preventDefault()
        if(password!== confirmPassword) {
            alert('Passwords don`t match')
            return
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password)

            await createUserDocumentFromAuth(user, {displayName})
            resetFormFields()
        } catch (error) {
            if(error.code === 'auth/email-in-use') {
                alert('Can not create user, email already in use')
            } else {
                console.log(error.message)
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
            <h2>Don`t have an account?</h2>
            <span>Sign up with ypur email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput type="text" 
                label="Display name"
                required 
                name="displayName"
                value={displayName}
                onChange={handleChange}    
                />
                <FormInput type="email" 
                label="Email"
                required 
                name="email"
                value={email}  
                onChange={handleChange}      
                />
                <FormInput type="password" 
                label="Password"
                required 
                name="password"
                value={password}
                onChange={handleChange}        
                />
                <FormInput type="password" 
                label="Confirm Password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}    
                 />
                <Button type="submit">Sign up</Button>
            </form>
        </div>
     );
}
 
export default SignUpForm;
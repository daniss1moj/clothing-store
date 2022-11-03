import UserContext from "./user-context";
import { useState, useEffect } from "react";
import { onAuthStateChangedListener, signOutUser, createUserDocumentFromAuth } from "../components/utils/firebase"
const UserProvider = ({children}) => {
    
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
          if (user) {
            createUserDocumentFromAuth(user);
          }
          setCurrentUser(user);
        });
    
        return unsubscribe;
      }, []);

    const [currentUser, setCurrentUser] = useState(null)
    const value = {currentUser, setCurrentUser}

    return ( 
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
     );
}
 
export default UserProvider;
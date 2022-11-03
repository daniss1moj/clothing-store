import React from "react";

const UserContext = React.createContext({
    currentUser: null,
    setCurrentUser: ()=> null
})

export default UserContext
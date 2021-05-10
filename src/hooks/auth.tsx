import React from "react"
import { AuthContext } from "../global/auth"

const useAuth = () => {
    const auth = React.useContext(AuthContext)
    console.log(auth)

    const login = (account: any) => auth.login(account)
    const logout = () => auth.logout()

    return {
        isAuthenticating: auth.isAuthenticating,
        authenticated: auth.authenticated,
        login,
        logout,
    }
}

export default useAuth
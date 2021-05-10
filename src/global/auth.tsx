import React from 'react';

const initialState = {
    authenticated: false,
    isAuthenticating: false,
    user: null,
    login: (account: any) => {},
    logout: () => {},
}

export const AuthContext = React.createContext(initialState)

const authReducer = (state: any, action:any) => {
    switch (action.type) {
        case 'login':
            return {
                ...state,
                isAuthenticating: true,
                authenticated: false,
            }
        case 'login pass':
            return {
                ...state,
                isAuthenticating: false,
                authenticated: true,
                user: action.payload
                }
        case 'login fail':
            return {
                ...state,
                isAuthenticating: false,
                authenticated: false,
                user: null
            }
        case 'logout':
                return {
                    ...state,
                    isAuthenticating: false,
                    authenticated: false,
                    user: null
                }
        default:
            return state
    }
}

const AuthProvider = (props: any) => {
    const [state, dispatch] = React.useReducer(authReducer, initialState)

    React.useEffect(() => {
        const reauth = (token: string) => {
            dispatch({type: 'login'})
            setTimeout(() => {
                dispatch({type: 'login pass'})
            }, 3000)
        }
        const accessToken = sessionStorage.getItem('auth')
        if (accessToken) reauth(accessToken)
    })

    const login = (account:any) => {
        dispatch({type: 'login'})
            setTimeout(() => {
                dispatch({type: 'login pass'})
                sessionStorage.setItem('auth', account)
            }, 3000)
    }

    const logout = () => {
        dispatch({type: 'logout'})
        sessionStorage.removeItem('auth')
    }

    return (
        <AuthContext.Provider 
            value={{
                ...state,
                login,
                logout
            }}
            {...props}
        />
    )
}

export default AuthProvider
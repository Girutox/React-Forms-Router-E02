import { createContext, useState } from 'react'

export const AuthContext = createContext({
  isLoggedIn: false,
  logIn: () => { },
  logOut: () => { }
})

const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      logIn: () => { setIsLoggedIn(true) },
      logOut: () => { setIsLoggedIn(false) }
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
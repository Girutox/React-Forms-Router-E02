import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext({
  isLoggedIn: false,
  logIn: () => { },
  logOut: () => { }
})

const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  console.log(isLoggedIn);

  useEffect(() => {    
    if (localStorage.getItem('isLoggedIn')) {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true')
    }
  }, [])  

  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      logIn: () => { 
        setIsLoggedIn(true)
        localStorage.setItem('isLoggedIn', 'true')
      },
      logOut: () => { 
        setIsLoggedIn(false)
        localStorage.setItem('isLoggedIn', 'false')
      }
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
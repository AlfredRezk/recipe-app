import { createContext, useContext } from 'react'
import { toast } from 'react-toastify'

import useLocalStorage from '../hooks/useLocalStorage'
// Create context using createContext()
const AuthContext = createContext()

// Create a context Provider which is a component

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  // const [isAuth, setIsAuth] = useState(false)
  const [isAuth, setIsAuth] = useLocalStorage('auth', false)

  // login
  const login = () => {
    setIsAuth(true)
    toast.success('Successfully logged In ')
  }
  // logout
  const logout = () => {
    setIsAuth(false)
    toast.success('Successfully logged Out ')
  }

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// access context

export const useAuth = () => {
  const data = useContext(AuthContext)
  return data
}

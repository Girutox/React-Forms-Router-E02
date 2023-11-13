import {useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../store/AuthProvider'

export const useAuth = () => {
  const navigate = useNavigate()

  const { isLoggedIn } = useContext(AuthContext)

  useEffect(() => {
    if (!isLoggedIn) {
      console.log('User is not logged in');

      navigate('/')
    }
  }, [isLoggedIn, navigate])
}
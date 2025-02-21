import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function PrivateRoutes() {
  const { isAuth } = useAuth()
  return isAuth ? <Outlet /> : <Navigate to='/login' />
}

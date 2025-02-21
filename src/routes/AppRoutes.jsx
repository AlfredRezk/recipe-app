import { Route, Routes } from 'react-router-dom'
import { Home, About, Login, Details } from '../pages'
import PrivateRoutes from './PrivateRoutes'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Login />} />
      <Route path='/details' element={<PrivateRoutes />}>
        <Route path='' element={<Details />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes

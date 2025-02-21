import { Link } from 'react-router-dom'
import { Logo, Menu, MenuIcon, MenuLink, Nav } from '../styles/Navbar'
import { Container, Stack } from '../styles/UI'
import { MdMenu } from 'react-icons/md'
import { useAuth } from '../context/AuthContext'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { isAuth, logout } = useAuth()
  return (
    <Nav>
      <Container>
        <Stack justify='space-between' align='center' direction='row'>
          <Link to='/'>
            <Logo />
          </Link>
          <MenuIcon>
            <MdMenu onClick={() => setOpen(!open)} />
          </MenuIcon>

          <Menu show={open.toString()}>
            <MenuLink to='/about'>About</MenuLink>
            <MenuLink to='https://github.com' target='_blank'>
              Github
            </MenuLink>
            {isAuth ? (
              <MenuLink to='/login' onClick={() => logout()}>
                Logout
              </MenuLink>
            ) : (
              <MenuLink to='/login'>Login</MenuLink>
            )}
          </Menu>
        </Stack>
      </Container>
    </Nav>
  )
}

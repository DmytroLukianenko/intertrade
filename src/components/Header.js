import { AppBar, Box, IconButton, List, SwipeableDrawer, Toolbar, Typography, useMediaQuery } from '@mui/material'
import { Link, NavLink } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import logo from '../assets/Icons/Logo.png'
import Iconify from './Iconify'
import { useState } from 'react'

const pages = [
  { name: 'Головна', path: '/' },
  { name: 'CarBox 2000', path: 'ebox' },
  { name: 'Інші продукти', path: 'products' },
  { name: 'О нас', path: 'about-us' },
  { name: 'Контакти', path: 'contacts' },
]

export default function Header() {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const activeStyle = {
    textDecoration: 'underline',
    color: theme.palette.text.greenPrimary,
  }

  const unActiveStyle = {
    textDecoration: 'none',
    color: 'inherit',
    transition: 'all 0.3s ease',
  }

  return (
    <>
      <AppBar position="static" open={open}>
        <Link to={'/'}>
          <Box component="img" src={logo} width={100} height={70} />
        </Link>
        <Toolbar>
          {isDesktop ? (
            <List sx={{ display: 'flex', wrap: 'nowrap' }}>
              {pages.map(item => (
                <NavLink key={item.name} to={item.path} style={({ isActive }) => (isActive ? activeStyle : unActiveStyle)}>
                  <Typography variant="h6" sx={{ mx: 2, whiteSpace: 'nowrap' }}>
                    {item.name}
                  </Typography>
                </NavLink>
              ))}
            </List>
          ) : (
            <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start">
              <Iconify icon="ic:round-menu" />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <SwipeableDrawer open={open} onClose={handleDrawerClose} onOpen={handleDrawerOpen} sx={{ width: '200px' }}>
        <List sx={{ display: 'flex', flexDirection: 'column' }}>
          {pages.map(item => (
            <NavLink key={item.name} to={item.path} style={({ isActive }) => (isActive ? activeStyle : unActiveStyle)}>
              <Typography variant="h6" sx={{ mx: 2, whiteSpace: 'nowrap' }}>
                {item.name}
              </Typography>
            </NavLink>
          ))}
        </List>
      </SwipeableDrawer>
    </>
  )
}

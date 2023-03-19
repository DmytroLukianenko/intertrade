import { AppBar, Box, List, Typography } from '@mui/material'
import { Link, NavLink } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import logo from '../assets/Icons/Logo.png'
import Iconify from './Iconify'

const pages = [
    { name: 'Головна', path: '/' },
    { name: 'Резервне джерело живлення', path: 'ebox' },
    { name: 'Інші продукти', path: 'products' },
    { name: 'О нас', path: 'about-us' },
    { name: 'Контакти', path: 'contacts' },
]

export default function Header() {
    const theme = useTheme()

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
        <AppBar position="static">
            <Link to={'/'}>
                <Box component='img' src={logo} width={100} height={70} />
            </Link>
            <List sx={{ display: 'flex', wrap: 'nowrap' }}>
                {pages.map(item => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        style={({ isActive }) => (isActive ? activeStyle : unActiveStyle)}
                    >
                        <Typography variant="h6" sx={{ mx: 2, whiteSpace: 'nowrap' }}>
                            {item.name}
                        </Typography>
                    </NavLink>
                ))}
            </List>
        </AppBar>
    )
}

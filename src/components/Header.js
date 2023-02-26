import { AppBar, Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

const pages = ['Головна', "Інші продукти", "О нас", "Контакти"]

export default function Header() {

    return (
        <AppBar position='static'>
            <List sx={{ display: 'flex' }}>
                {pages.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </AppBar>
    )
}
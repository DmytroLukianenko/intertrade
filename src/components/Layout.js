import { Box } from '@mui/material';
import Header from './Header'

export default function Layout({ children }) {
    return (
        <Box>
            <Header />
            {children}
        </Box>
    )
}
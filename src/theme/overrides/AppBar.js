export default function AppBar(theme) {
    return {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    // display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0 20px',
                    backgroundColor: theme.palette.background.default,
                    color: 'black',
                }
            }
        }
    }
}
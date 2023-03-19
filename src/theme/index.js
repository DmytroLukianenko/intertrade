import { useMemo } from "react";
import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider as MUIThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import componentsOverride from './overrides'
import breakpoints from './breakpoints'
import palette from './palette'

export default function ThemeProvider({ children }) {

    const themeOptions = useMemo(() => ({
        // typography,
        palette,
        breakpoints,
        shape: { borderRadius: 8 },
    }), [])

    const theme = createTheme(themeOptions)
    theme.components = componentsOverride(theme)

    return (
        <StyledEngineProvider injectFirst>
            <MUIThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MUIThemeProvider>
        </StyledEngineProvider>
    )
}
export default function Button(theme) {
  return {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          '&.MuiButton-contained': {
            backgroundColor: theme.palette.button.main,
            '&:hover': {
              backgroundColor: theme.palette.button.hover,
            },
          },
        },
      },
    },
  }
}

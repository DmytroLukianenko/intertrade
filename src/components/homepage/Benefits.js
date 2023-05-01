import { Box, Container, Grid, Paper, Stack, Typography, useTheme } from '@mui/material'
import Iconify from '../Iconify'

const blocks = [
  { icon: 'fa6-solid:hands-holding', title: 'ВСТАНОВЛЕНО СИСТЕМ', quantity: '250' },
  { icon: 'mdi:house-flash-outline', title: 'ДОМОВЛАДІНЬ', quantity: '100' },
  { icon: 'ic:sharp-energy-savings-leaf', title: 'ENERGY SAVED', quantity: '360' },
  { icon: 'game-icons:embrassed-energy', title: 'ЩАСЛИВИХ ЛЮДЕЙ', quantity: '1000' },
]

export default function Benefits(params) {
  const theme = useTheme()
  return (
    <Container sx={{ p: 4 }}>
      <Grid container spacing={3} sx={{ mt: 0 }}>
        {blocks.map((item, i) => (
          <Grid key={i} item xs={12} md={6} lg={3}>
            <Paper
              sx={{
                transform: { lg: 'translate(0px, -100px)', xs: 'none' },
                height: '100%',
                p: 4,
                display: 'flex',
                overflow: 'hiden',
                position: 'relative',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease-out',
                '&:hover': {
                  transform: { lg: 'scale(1.05) translate(0px, -100px)', xs: 'scale(1.05)' },
                  boxShadow: `0 24px 36px rgba(0,0,0,0.11),
                   0 24px 46px ${theme.palette.primary.lighter}`,
                },
              }}
            >
              {/* <Box
                sx={{
                  width: '100%',
                  position: 'absolute',
                  height: '20px',
                  //   borderRadius: '50%',
                  background: theme.palette.primary.lighter,
                  top: '70px',
                  left: '50px',
                  zIndex: '0',
                  transition: 'transform 0.3s ease-out',
                  '&:hover': { transform: 'scale(4) translateZ(0)', display: 'block' },
                }}
              /> */}
              <Iconify icon={item.icon} color="button.main" width="40px" height="40px" sx={{ mr: 2 }} />
              <Stack>
                <Typography variant="h4" fontWeight={700}>
                  {item.quantity}
                  <Box component="span" color="button.main">
                    {' '}
                    +
                  </Box>
                </Typography>
                <Typography variant="body2">{item.title}</Typography>
              </Stack>
            </Paper>
          </Grid>
        ))}
        {/* <Grid item xs={12} md={6} lg={3}></Grid>
        <Grid item xs={12} md={6} lg={3}></Grid>
        <Grid item xs={12} md={6} lg={3}></Grid> */}
      </Grid>
    </Container>
  )
}

import { Grid, Typography, Box, Button } from '@mui/material'
import { Stack } from '@mui/system'

import heroImage from '../../assets/Images/hero.jpg'

export default function HPHero() {
  const toOffer = () => {
    const section = document.getElementById('ourOffer')
    section.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <Grid container sx={{ height: { md: '80vh', xs: '90vh' }, display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, alignItems: 'center' }}>
      <Box component="img" src={heroImage} sx={{ height: '90%', width: '100%', position: 'absolute', zIndex: '-1' }} />
      <Stack
        spacing={2}
        sx={{
          p: 5,
          maxWidth: { md: '50%', xs: '90%' },
          height: 'fit-content',
          backgroundImage: 'linear-gradient(135deg, rgba(245, 247, 250, 0.7) 50%, rgba(195, 207, 226, 0.7) 65%);',
          position: 'absolute',
          top: { md: '25%', xs: 'auto' },
          left: { md: '15%', xs: 'auto' },
          borderRadius: 1,
        }}
      >
        <Typography variant="h1" sx={{ fontSize: '47px', fontFamily: 'Lexend Deca', fontWeight: '700' }}>
          Вільна енергія в кожну сім'ю
        </Typography>
        <Typography variant="h5">Зелена енергія – перший крок до вашої незалежності!</Typography>
        <Button variant="contained" onClick={toOffer}>
          Дізнатись більше
        </Button>
      </Stack>
    </Grid>
  )
}

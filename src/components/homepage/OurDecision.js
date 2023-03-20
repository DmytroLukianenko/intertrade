import { Box, Container, Typography } from '@mui/material'
import answerImg from '../../assets/Images/offer/AdobeStock_422996397.jpeg'

export default function OurAnswer() {
  return (
    <Container sx={{ p: '0 !important', maxWidth: '100vw !important', mt: 10, mb: 10, position: 'relative' }}>
      <Box component="img" src={answerImg} sx={{ width: '100%' }} />
      <Typography
        variant="h3"
        fontWeight={600}
        color="#fff"
        sx={{ position: 'absolute', display: 'flex', width: '100%', top: '15%', justifyContent: 'center' }}
      >
        У нас є рішення!
      </Typography>
    </Container>
  )
}

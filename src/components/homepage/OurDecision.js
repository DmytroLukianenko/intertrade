import { Box, Container, Typography } from '@mui/material'
import answerImg from '../../assets/Images/offer/AdobeStock_422996397.jpeg'

export default function OurAnswer() {
  return (
    <Box
      container
      sx={{
        // mt: 10,
        // mb: 10,
        p: 2,
        alignItems: { md: 'flex-start', xs: 'center' },
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        backgroundImage: `url(${answerImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        // height: '100vh',
        height: '400px',
      }}
    >
      <Container
        sx={{
          height: 'fit-content',
          p: 3,
          borderRadius: 1,
          // zIndex: 1,
          // position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          top: '17%',
          backgroundImage: 'linear-gradient(135deg, rgb(245 247 250 / 90%) 50%, rgb(225 233 246 / 88%) 65%)',
        }}
      >
        <Typography variant="body1" fontWeight={500}>
          Останні події, пов’язані з дестабілізацією у світі енергозабезпечення звичними видами вуглеводневого палива, які були викликані бажанням однієї
          неадекватної країни встановити «енергетичну монополію», відкрита агресія та руйнування енергетичної системи України російським агресором, показали
          хиткість існуючої енергетичної системи та необхідність існування альтернативних та автономних джерел енергопостачання.
        </Typography>
      </Container>
    </Box>
  )
}

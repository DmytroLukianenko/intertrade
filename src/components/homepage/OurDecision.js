import { Box, Container, Typography } from '@mui/material'
import answerImg from '../../assets/Images/offer/AdobeStock_422996397.jpeg'

export default function OurAnswer() {
  return (
    <Box sx={{ mt: 10, mb: 10, position: 'relative', display: 'flex', justifyContent: 'center' }}>
      <Box component="img" src={answerImg} sx={{ width: '100%' }} />
      <Container
        sx={{
          height: '100px',
          p: 3,
          borderRadius: 1,
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          top: '17%',
          backgroundImage: 'linear-gradient(135deg, rgba(245, 247, 250, 0.7) 50%, rgba(195, 207, 226, 0.7) 65%)',
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

import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import aboutImg from '../../assets/Images/AboutUs/greenBulb.jpg'

export default function AboutUsSection() {
  return (
    // <Container>
    <Grid container position="relative">
      <Grid item md={6} xs={12} sx={{ maxHeight: '100vh' }}>
        <Box component="img" src={aboutImg} sx={{ transform: 'scaleX(-1)', height: '100%', width: ' 100%' }} />
      </Grid>
      <Grid item md={6} xs={12} sx={{ mt: { md: 0, xs: '-50%', zIndex: 1 } }}>
        {/* <Box display="flex"> */}
        <Stack spacing={2} sx={{ p: { md: '10% 10% 10% 0', xs: '0 10px' } }}>
          <Typography variant="h5" color="text.greenDark" fontWeight={600} sx={{ textAlign: { xs: 'center', md: 'inherit' } }}>
            {' '}
            О нас
          </Typography>
          <Typography variant="h4" fontWeight={600} sx={{ textAlign: { xs: 'center', md: 'inherit' } }}>
            {' '}
            We Are The Top Renewable Energy Solutions
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: '2', fontWeight: 400 }}>
            {' '}
            Ласкаво просимо до нашої компанії! <br />
            Ми є українською компанією, яка має за мету забезпечити кожного українця доступом до основних енергетичних ресурсів, таких як світло і тепло, навіть
            у складних умовах та в умовах російської агресії. <br />
            Ми розуміємо важливість енергетичних ресурсів для кожної людини та сім'ї, тому зосереджуємо увагу на забезпеченні стійкості та надійності
            енергетичної мережі для наших клієнтів. Ми працюємо над тим, щоб наші клієнти могли користуватись світлом і теплом в будь-який час, навіть у
            найскладніших умовах.
          </Typography>
          <Button variant="contained" onClick={() => alert('Тут буде редірект на сторінку о компанії')}>
            Дізнатись більше
          </Button>
          {/* </Box> */}
        </Stack>
      </Grid>
    </Grid>
    //  </Container>
  )
}

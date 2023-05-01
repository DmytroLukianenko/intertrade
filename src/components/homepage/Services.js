import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import solar from '../../assets/Images/servicesHP/solar.jpg'
import battery from '../../assets/Images/servicesHP/battery.jpg'
import instalation from '../../assets/Images/servicesHP/instalation.jpg'
import lamp from '../../assets/Images/servicesHP/lamp.jpg'
import bg from '../../assets/Images/servicesHP/bg.jpg'

const data = [
  {
    title: 'Сонячні панелі',
    desc: 'Фотоелектричний модуль — це збірка фотоелементів, встановлених у каркас для інсталяції осередків, які використовують сонячне світло як джерело',
    img: solar,
  },
  {
    title: 'Викопні ресурси',
    desc: 'Зелена хімія привертає інтерес, оскільки вона забезпечує чисті та екологічні технології, які використовуються для застосування.',
    img: lamp,
  },
  {
    title: 'Контролери заряду',
    desc: 'Контролери заряду регулюють швидкість заряду від вашого інвертора до акумуляторної батареї, просто перегляньте наші контролери.',
    img: instalation,
  },
  { title: 'Матеріали акумулятора', desc: 'Літієві батареї стали вибором типу батареї в більшості застосувань через високу енергію', img: battery },
]

export default function Services() {
  return (
    <Box sx={{ p: '10% 5%', backgroundImage: `url(${bg})` }}>
      <Typography color="grey.300" variant="h3" fontWeight={700} sx={{ textAlign: 'center', mb: 5 }}>
        Інвестуй у свій комфорт вже сьогодні!
      </Typography>
      <Grid container spacing={3}>
        {data.map((item, i) => {
          return (
            <Grid item key={i} md={3} sm={6} xs={12}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  image={item.img}
                  alt={item.title}
                  sx={{
                    height: '300px',
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 80%)',
                    transition: 'all 0.6s ease',
                    '&:hover': {
                      transform: 'scale(1.1)',
                      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                    },
                  }}
                ></CardMedia>
                <CardContent>
                  <Typography fontWeight={700} color="text.greenDark">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

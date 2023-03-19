import { Box, Button, Container, Grid, Typography } from '@mui/material'
import offerImg from '../../assets/Images/offer/82436087-07efd594b59fb021fca391e06e4dfc20.jpg'

export default function OurOffer() {
  return (
    // <Container sx={{ maxWidth: '100vw !important' }} id="ourOffer">
    <>
      <Typography id="ourOffer" variant="h3" color="text.greenDark" fontWeight={600} textAlign="center" sx={{ mb: 5 }}>
        CarBox 200+
      </Typography>
      <Grid container sx={{ maxWidth: '100vw !important' }}>
        <Grid item md={6} xs={12} sx={{ p: 2 }}>
          <Typography variant="body1" lineHeight={2} sx={{ textAlign: 'justify' }}>
            {' '}
            Останні події, пов’язані з дестабілізацією у світі енергозабезпечення звичними видами вуглеводневого палива, які були викликані бажанням однієї
            неадекватної країни встановити «енергетичну монополію», відкрита агресія та руйнування енергетичної системи України російським агресором, показали
            хиткість існуючої енергетичної системи та необхідність існування альтернативних та автономних джерел енергопостачання. Наша кампанія враховує
            останні світові тенденції і приєднується до загального напрямку на розвиток відтворюваної «зеленої» енергії. Наші партнери – найкваліфікованіші
            виробники обладнання в ЄС, які виробляють і проводять селекцію обладнання для інсталяції у господарствах кінцевих споживачів. Ми розглянемо вашу
            заявку, вивчимо енергоємність господарства, розробимо технологічну карту, змонтуємо та проведемо пускові-налагоджувальні роботи. Наша продукція має
            гарантію до 10 років і закріплюється контрактом.
          </Typography>
          <Button variant="contained" sx={{ mt: 2 }} onClick={() => alert('Тут буде редірект на сторінку саого Карбоксу')}>
            Дізнатись більше
          </Button>
        </Grid>
        <Grid item md={6} xs={12} sx={{ maxHeight: '95vh' }}>
          <Box component="img" src={offerImg} sx={{ maxHeight: 'inherit', width: '100%' }}></Box>
        </Grid>
      </Grid>
    </>
    // </Container>
  )
}

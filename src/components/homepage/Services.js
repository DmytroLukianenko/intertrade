import { Grid } from '@mui/material'
import { useState } from 'react'

export default function Services() {
  const [image, setImage] = useState(null)

  const imageChanger = () => {
    switch (image) {
      case value:
        break

      default:
        break
    }
  }

  return (
    <Grid container>
      <Grid item xs={12} md={4}></Grid>
      <Grid item xs={12} md={4}></Grid>
      <Grid item xs={12} md={4}></Grid>
    </Grid>
  )
}

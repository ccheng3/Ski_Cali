import React from 'react';

import {
   Card,
   CardMedia, CardContent, Grid,
   CardActions
} from '@mui/material';

import CustomButton from '../CustomButton/CustomButton';

export default function Webcams(props) {
   return (props.webcams.map(cam => {
      return (
         <Grid item xs={12} sm={6} md={4}
            style={{ display: 'flex' }}
            key={cam.image}>
            <Card sx={{
               maxWidth: 400,
               margin: '0.8rem',
            }}>
               <CardMedia component='img'
                  image={cam.image}
                  alt='resort traffic webcam'>
               </CardMedia>
               <CardContent>
                  {cam.name}
               </CardContent>
               <CardActions>
                  <CustomButton variant="outlined"
                     size='small'
                     target="_blank" href={cam.source}>
                     View Time Lapse
                  </CustomButton>
               </CardActions>
            </Card>
         </Grid>
      )
   })
   );
}
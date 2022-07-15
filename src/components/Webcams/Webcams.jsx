import React from 'react';

import {
   Paper, Card,
   CardMedia, CardContent, Grid,
   CardActions, Button, Typography
} from '@mui/material';

import WindyLogo from '../../images/windy-logo.png';

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
                  <Button variant="outlined"
                     size='small'
                     target="_blank" href={cam.source}>
                     {`View Time Lapse`}
                  </Button>
               </CardActions>
            </Card>
         </Grid>
      )
   })
   );
}
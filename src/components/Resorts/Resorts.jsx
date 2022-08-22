import React from 'react';

import {
   Card, CardMedia, CardContent,
   Typography, Grid
} from '@mui/material';

import { Link } from 'react-router-dom';

export default function Resorts(props) {
   const resortList = props.resorts.map((resort) => {
      return (
         // the Grid's responsive layout breakpoints rely on a 
         // 12 column layout. 
         // If XS condition, then each element in grid takes entire 12 cols (1 col layout total)
         // If SM condition, then each element in grid takes 6 cols (2 col layout total)
         // If MD condition or above, then each element in grid takes 3 cols (4 col layout total)
         <Grid key={resort.skimapID} item
            xs={12} sm={6} md={3}
         >
            {/* The key to the transition from resorts to resort page is 
            the React Router Link component used here + useParams hook in 
            respective resort's page component. I guess I forgot what was 
            going on. */}
            <Link to={resort.query}>
               <Card sx={{
                  maxWidth: '100%',
                  m: 3,
                  "&:hover": {
                     boxShadow: 20,
                  },
                  cursor: 'pointer',
               }}>
                  <CardMedia
                     component='img'
                     height='140'
                     image={resort.image}
                     alt="ski resort logo"
                  />
                  <CardContent>
                     <Typography gutterBottom variant='h4' component='div'
                        sx={{
                           textAlign: 'center',
                        }}>
                        {resort.query}
                     </Typography>
                     <Typography variant='body2' color='text.secondary'>
                        Ski Map ID: {resort.skimapID}
                     </Typography>
                  </CardContent>
               </Card>
            </Link>
         </Grid>
      )
   })
   return (
      <Grid container my={4} style={{
         backgroundColor: '#D3D3D3		',
         marginTop: 0,
         marginBottom: 0,
         paddingTop: '32px',
         paddingBottom: '32px',
      }}>
         {resortList}
      </Grid>
   )
};
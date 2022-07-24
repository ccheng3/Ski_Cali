import React from 'react';

import {
   Typography,
   Paper, Container,
   Button,
} from '@mui/material';

export default function WeatherReport(props) {
   const todayStringArray = props.resort.weather.date.split('-');

   return (
      <>
         <Typography variant='h4'
            sx={{
               textDecoration: 'underline',
               marginBottom: '1.2rem'
            }}>{props.resort.name}
         </Typography>
         <Paper sx={{
            padding: '1.2rem 2.4rem',
            boxShadow: 5
         }}>
            {/* We in U.S.A format our dates as MM/DD/YYYY, while the Europeans format as DD/MM/YYYY */}
            <Container sx={{
               display: 'flex',
               alignItems: 'center',
            }}>
               <h3>Weather Report for Today, {todayStringArray[1]}/{todayStringArray[2]}/{todayStringArray[0]}</h3>
               <Container sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  maxWidth: '150px',
               }}>
                  <span>Brought to you by</span>
                  <img src={props.resort.weather.notice.img} alt='NOAA official logo'
                     width='100' height='50'
                  />
               </Container>
            </Container>
            <Typography
               variant='body1'
               sx={{
                  fontStyle: 'italic',
                  marginTop: '1.0rem',
                  fontSize: '1.1rem',
               }}>{`"${props.resort.weather.text}"`}</Typography>
            <Button sx={{
               color: '#ed6c02',
               backgroundColor: '#2d4850',
               marginTop: '1.2rem'
            }} variant="contained" href={props.resort.weather.notice.href} target='_blank' rel='noopener noreferrer'>
               View the complete NOAA weather report
            </Button>
         </Paper>
      </>
   );
}
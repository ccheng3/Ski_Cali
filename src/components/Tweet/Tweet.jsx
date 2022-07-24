import React from 'react';

import { Typography, Paper, Stack, Container, Button } from '@mui/material';
import { TwitterLogo } from '../../images';

export default function Tweet(props) {
   return (
      <Paper sx={{
         padding: {
            xs: '1.0rem',
            sm: '2.4rem'
         },
         marginBottom: '2.4rem',
         boxShadow: 10
      }} >
         <Stack>
            <Typography sx={{
               fontWeight: 'bold',
               fontSize: '1.2rem'
            }} >
               {/* 'Mammoth Mountain Mountain Resort' 
            sounds really bad so just catch that */}
               {props.resort.name.includes('Mountain') ? `${props.resort.name} Resort` :
                  `${props.resort.name} Mountain Resort`}
            </Typography>
            <Typography sx={{
               display: 'flex',
               alignItems: 'center',
            }}>
               <img src={TwitterLogo} width='25px' height='25px'
                  sx={{
                     marginRight: '5px',
                  }} />
               {`@${props.resort.twitter.user}`}
            </Typography>

            <Container sx={{
               marginTop: '1.2rem',
               lineHeight: '1.6rem',
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'center',
               alignItems: 'center',
            }}>
               {props.tweetText}
               {props.tweetMediaFile}
               {props.tweetTextURL === '' || !props.tweetTextURL.includes('https') ? null :
                  <Button sx={{
                     color: '#ed6c02',
                     backgroundColor: '#2d4850',
                     marginTop: '1.2rem',
                     maxWidth: '250px',
                  }} variant="contained" href={props.tweetTextURL} target='_blank' rel='noopener noreferrer'>
                     Extra Info found here:
                  </Button>}
            </Container>
            <Typography sx={{
               marginTop: '1.2rem'
            }}>
               {props.tweetDateClean}
            </Typography>
         </Stack>
      </Paper >
   );
}
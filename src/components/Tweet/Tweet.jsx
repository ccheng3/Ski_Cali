import React from 'react';

import { Typography, Paper, Stack, Container, Button } from '@mui/material';
import { TwitterLogo } from '../../images';

export default function Tweet(props) {
   const tweetMobileStyling = { padding: { xs: 0, sm: '2.4rem' } };

   return (
      <Paper style={{
         ...tweetMobileStyling,
         marginBottom: '1.2rem',
      }}>
         <Stack>
            <Typography style={{
               fontWeight: 'bold',
            }}>
               {/* 'Mammoth Mountain Mountain Resort' 
            sounds really bad so just catch that */}
               {props.resort.name.includes('Mountain') ? `${props.resort.name} Resort` :
                  `${props.resort.name} Mountain Resort`}
            </Typography>
            <Typography style={{
               display: 'flex',
               alignItems: 'center',
            }}>
               <img src={TwitterLogo} width='25px' height='25px'
                  style={{
                     marginRight: '5px',
                  }} />
               {`@${props.resort.twitter.user}`}
            </Typography>

            <Container style={{
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
            <Typography style={{
               marginTop: '1.2rem'
            }}>
               {props.tweetDateClean}
            </Typography>
         </Stack>
      </Paper>
   );
}
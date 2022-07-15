import React from 'react';
import { Box, Paper, Stack } from '@mui/material';

import './About.css';
import { AboutPic } from '../../images';

export default function About() {
   return (
      <Box sx={{
         margin: 4,
         display: 'flex',
         justifyContent: 'center',
      }}>
         <Paper sx={{
            padding: 4,
            boxShadow: 10,
            backgroundColor: '#FF8138',
         }}>
            <h2>About this project:</h2>
            <Box className='about-div'>Data was sourced from the Liftie and Skimap.org APIs.</Box>
            <Box className='about-div'>A couple of extra caveats:
               <ul>
                  <li className='about-li'>Squaw Valley and Alpine Meadows have merged to form Palisades Tahoe.
                     A new gondola will connect the two resorts.</li>
                  <li className='about-li'>This application doesn't list many of the smaller California ski resorts because
                     the Liftie API doesn't currently include them. (Bear Valley, Big Bear, etc...)</li>
                  <li className='about-li'>The dataset was hardcoded in order to match the ski resort to its ski map ID. Unfortunately,
                     the skimap.org API doesn't allow you to query the resort using its name - they use an arbitrary
                     integer ID value which is mildly infuriating :/</li>
                  <li className='about-li'>This app doesn't look as good as the Ski Utah website but I still had a lot of fun building it! :)</li>
                  <li className='about-li'>The styling is a bit of a messy hodgepodge of sorts - I'm still learning how Material UI CSS in JS
                     styling works in general.</li>
               </ul>
            </Box>
            <Stack spacing={2}>
               <h2>About me:</h2>
               <Box className='about-div'>I really like skiing. Made my first turns at Northstar but I really
                  cut my teeth at Heavenly. I have actually never been to Palisades Tahoe (Squaw Valley USA),
                  but will definitely make it out there very soon! </Box>
               <Box className='about-div'>Currently consider myself an intermediate-advanced skier - you won't see
                  me dropping chutes/couloirs but I'm definitely not a Jerry for sure! My nirvana is a freshly groomed
                  blue cruiser run on a bluebird day.</Box>
               <Box style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
               }}>
                  <ul className='about-div'>
                     <p style={{
                        marginBottom: '6px',
                        textDecoration: 'underline',
                     }}>My current ski quiver:</p>
                     <li>
                        Carving Skis: 2021 Atomic Vantage 79 Ti
                     </li>
                     <li>
                        In-between Skis: 2021 Atomic Vantage 90 Ti
                     </li>
                     <li>
                        Powder Skis: 2022 Atomic Maverick 100 Ti
                     </li>
                     <Box style={{ marginTop: '24px', }}>
                        I use the 2021 Atomic Hawx Magna 110 boot - matches perfectly
                        with my wide, flat feet with low foot arch. Throw in a Sidas
                        insole for extra arch support.
                     </Box>
                  </ul>
                  <img src={AboutPic} alt='Author with set of new skis'
                     style={{
                        width: 300,
                        height: 350,
                        marginBottom: '6px',
                     }} />
                  <Box style={{
                     fontStyle: 'italic',
                  }}>
                     That's me feeling giddy with a new set of 2021 Atomic Vantage 90 Ti's
                  </Box>
               </Box>
            </Stack>
         </Paper>
      </Box>
   );
}
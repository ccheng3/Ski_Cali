import React from 'react';

import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { Paper, Stack, Typography, } from '@mui/material';

export default function Safety() {
   const videoPaperTemplateStyle = {
      padding: '1.8rem',
      margin: '1.2rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
   }

   const videoPaperStyle = {
      padding: '1.8rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '2.4rem',
      width: { xs: '350px', sm: '700px' },
      boxShadow: 5,
   }

   const textStyle = {
      maxWidth: '350px',
      marginBottom: '1.2rem',
      fontSize: '1.2rem',
   }

   const videoLinks = ['HnXy77D4Uwk', 'TZQXuWzBC18', '1jcLEkjeCy4', '84lt-3uc_Gc?start=74'];
   const videoTitles = ['How to drive in snowy weather', 'How to correct for slides while driving',
      'Watch: loss of tire traction in Big Bear, CA', 'Caution: Suffocation incident due to tree well fall']

   return (
      <Paper elevation={3} sx={videoPaperTemplateStyle}>
         <Typography sx={textStyle}>Pursuing snow sports incurs its own natural risks.
            Please educate yourself on the pertinent risks and prepare well
            in advance for unforeseen circumstances.</Typography>
         <Stack
            direction='row'
            spacing={2}
            sx={{
               display: 'flex',
               alignItems: 'center',
               marginBottom: '2.0rem',
            }}>
            <WarningAmberIcon
               color='warning'
               fontSize='large'
            />
            <Typography sx={{
               ...textStyle,
               textDecoration: 'underline',
            }
            }>
               This knowledge could very well determine the
               difference between life and death!</Typography>
         </Stack>
         <Stack>
            {videoLinks.map((video, index) => {
               return (
                  <Stack sx={{
                     textAlign: 'center',
                  }}>

                     <Paper sx={videoPaperStyle}>
                        <Typography sx={{
                           marginBottom: '1.2rem',
                           fontWeight: 600,
                           fontSize: '1.1rem',
                           padding: { xs: '0rem 2.4rem', sm: 0 }
                        }} variant='h5'>
                           {videoTitles[index].toUpperCase()}
                        </Typography>
                        <iframe width="100%" height="350"
                           src={`https://www.youtube-nocookie.com/embed/${video}`}
                           title="YouTube video player" frameborder="0"
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
               gyroscope; picture-in-picture" allowfullscreen></iframe>
                     </Paper>
                  </Stack>
               )
            })}
         </Stack>
      </Paper >
   );
}
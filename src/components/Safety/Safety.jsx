import React from 'react';

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
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '1.2rem',
      width: { xs: '350px', sm: '700px' }
   }

   const textStyle = {
      maxWidth: '350px',
      marginBottom: '1.2rem',
      fontSize: '1.2rem',
   }

   const videoLinks = ['HnXy77D4Uwk', 'TZQXuWzBC18', '1jcLEkjeCy4', '84lt-3uc_Gc?start=74'];
   const videoTitles = ['How to drive in snowy weather', 'How to correct for slides',
      'Watch: loss of tire traction in Big Bear, CA', 'Caution: Snow Immersion Suffocation due to Tree Well']

   return (
      <Paper elevation={3} style={videoPaperTemplateStyle}>
         <Typography style={textStyle}>Pursuing snow sports incurs its own natural risks.
            Please educate yourself on the pertinent risks and prepare well
            in advance for unforeseen circumstances.</Typography>
         <Typography style={{
            ...textStyle,
            textDecoration: 'underline'
         }
         }>This knowledge could very well determine the
            difference between life and death!</Typography>
         <Stack>
            {videoLinks.map((video) => {
               return <Paper sx={videoPaperStyle}>
                  <iframe width="100%" height="350"
                     src={`https://www.youtube-nocookie.com/embed/${video}`}
                     title="YouTube video player" frameborder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture" allowfullscreen></iframe>
               </Paper>
            })}
         </Stack>
      </Paper >
   );
}
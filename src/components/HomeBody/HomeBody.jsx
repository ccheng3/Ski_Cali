import React from 'react';

import { Box, Typography } from '@mui/material';

import background from '../../images/hero_banner.jpg';

export default function HomeBody() {
   return (
      <Box style={{
         display: 'flex',
         justifyContent: 'center',
         background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${background})`,
         backgroundPosition: '15% 70%',
         backgroundSize: 'cover',
         width: '100%',
         height: '100vh',
      }}>
         <Typography variant='h2' style={{
            padding: '3.2rem 3.6rem',
            color: 'rgb(230,230,230)',
            textTransform: 'uppercase',
            fontWeight: 'bold',
         }}>
            Almost 40,000 total acres of cold blower to shred. Will you answer the call?
         </Typography>
      </Box>
   )
};
import React from 'react';

import { Box, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import background from '../../images/hero_banner.jpg';

const theme = createTheme();

theme.typography.h3 = {
   fontSize: '1.2rem',
   '@media (min-width:0px)': {
      fontSize: '1.5rem',
      lineHeight: '3.2rem',
      // backgroundPosition: '90% 70%',
   },
   [theme.breakpoints.up('md')]: {
      fontSize: '3.6rem',
      lineHeight: '4.8rem',
   },
};

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
         <ThemeProvider theme={theme}>
            <Typography variant="h3" style={{
               padding: '3.2rem 3.6rem',
               color: 'rgb(230,230,230)',
               textTransform: 'uppercase',
               fontWeight: 'bold',
            }}>
               Almost 40,000 total acres of cold blower to shred. Will you answer the call?
            </Typography>
         </ThemeProvider>
      </Box>
   )
};
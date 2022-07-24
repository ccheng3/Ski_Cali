import React from 'react';

import { Box, Typography, Stack } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

import background from '../../images/hero_banner.jpg';
import CustomButton from '../CustomButton/CustomButton';

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
         backgroundPosition: 'top center',
         backgroundSize: 'cover',
         width: '100%',
         height: '100vh',
      }}>
         <Stack sx={{
            display: 'flex',
            alignItems: 'center',
         }}>
            <ThemeProvider theme={theme}>
               <Typography variant="h3" style={{
                  padding: '1.8rem 3.6rem',
                  color: 'rgb(230,230,230)',
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
               }}>
                  Almost 40,000 total acres of cold blower to shred. Will you answer the call?
               </Typography>
            </ThemeProvider>
            <Stack direction='row'
               sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: { xs: '0rem 2.4rem', sm: 0 },
               }}
            >
               <NavLink to='/resorts'>
                  <CustomButton sx={{
                     marginRight: '1.5rem',
                     color: '#2d4850',
                     backgroundColor: '#ed6c02',
                     '&:hover': {
                        backgroundColor: '#fff',
                        color: '#3c52b2',
                     },
                  }}
                     variant='contained'>
                     View Resort Conditions
                  </CustomButton>
               </NavLink>
               <NavLink to='/traffic'>
                  <CustomButton sx={{
                     marginLeft: '1.5rem',
                     border: '1px solid yellow',
                     color: 'yellow',
                     '&:hover': {
                        backgroundColor: '#fff',
                        color: '#2d4850',
                     },
                  }}
                     variant='outlined'>
                     Check Traffic
                  </CustomButton>
               </NavLink>
            </Stack>
         </Stack>
      </Box>
   )
};
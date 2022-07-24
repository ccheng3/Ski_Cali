import { Container, Typography } from '@mui/material';
import React from 'react';

export default function TrafficMap(props) {
   const iframeStyle = {
      marginTop: '0.5rem',
      // removing the border per the doc's example - i thought the border 
      // was too distracting
      border: 0,
      borderRadius: '20px',
   }

   let sourceString = props.mapMode === 'directions' ?
      `https://www.google.com/maps/embed/v1/directions?key=${process.env.REACT_APP_MAPS_API_KEY}
   &origin=${props.lat},${props.long}&destination=${props.destination}` :
      `https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_MAPS_API_KEY}
      &q=${props.resortName}+Ski+Resort&zoom=10&center=${props.lat},${props.long}`
   return (
      <Container style={{
         width: { xs: '100%' }
      }}>
         <Typography sx={{
            marginTop: '2.6rem',
            lineHeight: { xs: '2.0rem', sm: '1.8rem' },
            padding: { sm: '0 15rem' }
         }}>{props.mapDescription}</Typography>
         <iframe
            style={iframeStyle}
            width='100%'
            height="500"
            loading='lazy'
            allow="fullscreen"
            referrerPolicy="no-referrer-when-downgrade"
            src={sourceString}></iframe>
      </Container >
   )
}
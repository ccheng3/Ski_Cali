import React from 'react';

export default function TrafficMap(props) {
   const iframeStyle = {
      marginTop: '0.5rem',
      // removing the border per the doc's example - i thought the border 
      // was too distracting
      border: 0,
      borderRadius: '20px',
   }

   let sourceString = props.mapMode === 'directions' ? `https://www.google.com/maps/embed/v1/directions?key=${process.env.REACT_APP_MAPS_API_KEY}
   &origin=${props.lat},${props.long}&destination=${props.destination}` :
      `https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_MAPS_API_KEY}
      &q=${props.resortName}+Ski+Resort&zoom=10&center=${props.lat},${props.long}`
   return (
      <>
         <div style={{
            marginTop: '2.6rem',
            lineHeight: '1.8rem',
         }}>{props.mapDescription}</div>
         <iframe
            style={iframeStyle}
            width="600"
            height="450"
            loading='lazy'
            allow="fullscreen"
            referrerPolicy="no-referrer-when-downgrade"
            src={sourceString}></iframe>
      </>
   )
}
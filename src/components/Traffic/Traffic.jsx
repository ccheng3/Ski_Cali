import React from 'react';
import { Box, Paper, Button, Skeleton } from '@mui/material';
import { nanoid } from 'nanoid';


import TrafficMap from '../TrafficMap/TrafficMap';

export default function Traffic() {
   const destinations = ['Truckee,CA', 'SouthLakeTahoe,CA', 'MammothMountain,CA'];
   const mapMessages = [
      `I am using Truckee, CA as a proxy for the North Tahoe ski resorts.`,
      `South Lake Tahoe, CA is used as the proxy for the South Tahoe ski resorts.
      Note that you will need to take Highway 88 to get to Kirkwood.`,
      `Mammoth is the premiere resort for SoCal skiers and riders! It's not as economical for 
      SF Bay Area friends because the mountain passes are closed during the winter and you would
      have to drive up to Tahoe and then back down the Sierra Nevada backside, whereas it's
      a straight-shot North through the Mojave Desert from SoCal through to Mammoth.`,
   ]
   const [hasReceivedUserLocation, setHasReceivedUserLocation] = React.useState(false);
   const [userLocation, setUserLocation] = React.useState({
      lat: 0,
      long: 0,
   });

   const divStyling = {
      marginBottom: '1.2rem',
   };

   const buttonStyling = {
      color: '#ed6c02'
   };

   const trafficMapStyle = {
      marginTop: '2.2rem',
      textDecoration: 'underline',
      fontSize: '1.2rem',
   };

   const trafficMapWidth = {
      width: { xs: '350px', sm: '600px' },
   };


   // use React DevTool to verify the state!
   React.useEffect(() => {
      function success(pos) {
         const crd = pos.coords;
         setUserLocation({
            lat: crd.latitude,
            long: crd.longitude,
         });
         setHasReceivedUserLocation(true);
      }

      function error(err) {
         console.warn(`ERROR(${err.code}): ${err.message}`);
      }
      navigator.geolocation.getCurrentPosition(success, error);
   }, []);

   const displayMaps = destinations.map((destination, index) => {
      return <TrafficMap destination={destination}
         mapMode={'directions'}
         mapDescription={mapMessages[index]}
         lat={userLocation.lat}
         long={userLocation.long}
         key={nanoid()}
         mapWidth={trafficMapWidth}>
      </TrafficMap>
   });

   return (
      <Box sx={{
         margin: 4,
         display: 'flex',
         justifyContent: 'center',
      }}>
         <Paper sx={{
            width: { trafficMapWidth },
            lineHeight: { xs: '1.9rem', sm: '1.2rem' },
            padding: 4,
            boxShadow: 10,
            backgroundColor: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
         }}>
            <div style={divStyling}>
               Please see Chad Smith's excellent Tahoe road conditions website here: <Button sx={{ color: '#ed6c02', backgroundColor: '#2d4850', }} variant="contained" href="https://tahoeroads.info/" target='_blank' rel='noopener noreferrer'>
                  Check road conditions
               </Button></div>
            <ul> <h3>Three main roads into Tahoe from SF Bay Area:</h3>
               <li>Highway 88 --> Goes to Kirkwood </li>
               <li>Highway 50 --> Goes to Sierra at Tahoe and Heavenly </li>
               <li>Highway 80 --> Goes to north shore Tahoe resorts (Sugar Bowl, Northstar, Palisades, Boreal)</li>
            </ul>

            <div style={trafficMapStyle}>Please allow JavaScript to get your current location so that
               Google Maps can show you the fastest way to get to the different ski areas!</div>
            {/* Secured API key to only work with Google Maps Embed API and need to hide it.
            https://betterprogramming.pub/how-to-hide-your-api-keys-c2b952bc07e6*/}
            {/* Did not have a unique id for React to use as 'key' prop so I called on 
            nanoid() for help. */}
            {hasReceivedUserLocation ? displayMaps :
               <Skeleton variant="rectangular" width={600} height={450} />
            }
         </Paper>
      </Box >
   )
};
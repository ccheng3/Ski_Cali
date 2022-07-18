import React from 'react';

import { Grid, Paper } from '@mui/material';

import TrafficMap from '../TrafficMap/TrafficMap';
import WeatherReport from '../WeatherReport/WeatherReport';
import LiftStatus from '../LiftStatus/LiftStatus';
import DataNotPresent from '../DataNotPresent/DataNotPresent';
import Webcams from '../Webcams/Webcams';
import TweetPanel from '../TweetPanel/TweetPanel';

import WindyLogo from '../../images/windy-logo.png';

export default function ResortDetail(props) {
   const resort = props.resortData;

   return (
      <>
         <Paper style={{
            padding: { xs: 0, sm: '1.2rem' },
            margin: '1.2rem 1.8rem'
         }}>
            <Grid container spacing={2} style={{
               padding: { xs: 0, sm: '2.4rem' },
               display: 'flex',
               justifyContent: 'center',
            }}>
               <Grid item xs={12} style={{
                  maxWidth: '800px'
               }}>
                  {/* Not all resorts have weather data to use. Ask user to check a 
         nearby resort for more info. */}
                  {!resort.weather ? <DataNotPresent dataName='Weather' /> :
                     <WeatherReport resort={resort} />}
               </Grid>
               <Grid item xs={12} style={{
                  display: 'flex',
                  justifyContent: 'center',
               }}>
                  <TrafficMap resortName={resort.name}
                     mapMode={'place'}
                     lat={resort.ll[1]}
                     long={resort.ll[0]}
                     mapDescription='Explore the local area!'
                  />
               </Grid>
               <Grid item xs={12} style={{
                  paddingLeft: '9.6rem',
                  paddingRight: '9.6rem',
                  maxWidth: '800px'
               }}>
                  <LiftStatus status={resort.lifts.status} />
               </Grid>
               <Grid item xs={12} style={{
                  maxWidth: '800px'
               }}>
                  <TweetPanel resort={resort} />
               </Grid>
            </Grid>
         </Paper>
         {!resort.webcams ? <DataNotPresent dataName='Web Cam' /> :
            <>
               <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
               }}>
                  <h3 style={{ textAlign: 'center' }}>Web Cams - check out recent conditions!
                     <img src={WindyLogo} style={{
                        width: '70px',
                        height: '18px',
                        marginLeft: '10px',
                     }} /></h3>
               </div>
               <Grid container spacing={1}>
                  <Webcams webcams={resort.webcams} />
               </Grid></>}
      </>
   );
}
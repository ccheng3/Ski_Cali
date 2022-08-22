import React from 'react';

import { Grid, Paper, Typography, Tooltip, Stack } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import Fade from '@mui/material/Fade';

import TrafficMap from '../TrafficMap/TrafficMap';
import WeatherReport from '../WeatherReport/WeatherReport';
import LiftStatus from '../LiftStatus/LiftStatus';
import DataNotPresent from '../DataNotPresent/DataNotPresent';
import Webcams from '../Webcams/Webcams';
import TweetPanel from '../TweetPanel/TweetPanel';
import ResortStats from '../ResortStats/ResortStats';

import WindyLogo from '../../images/windy-logo.png';

import './ResortDetail.css';

export default function ResortDetail(props) {
   const resort = props.resortData;

   return (
      <>
         <Paper style={{
            padding: '1.4rem',
            margin: '1.2rem 1.8rem',
            backgroundColor: '#666',
         }}>
            <Grid container spacing={2} style={{
               padding: { xs: 0, sm: '2.4rem' },
               display: 'flex',
               justifyContent: 'center',
            }}>
               <Grid item xs={12} style={{
                  maxWidth: '800px',
               }}>
                  {/* Not all resorts have weather data to use. Ask user to check a 
         nearby resort for more info. */}
                  {!resort.weather ? <DataNotPresent dataName='Weather' /> :
                     <WeatherReport resort={resort} />}
               </Grid>
               <Grid item xs={12} style={{
                  maxWidth: '800px'
               }}>
                  <Paper sx={{
                     marginTop: '2.4rem',
                     boxShadow: '5',
                     padding: '1.2rem 0',
                     backgroundColor: '#ddd',
                  }}>
                     <Stack direction='row'
                        sx={{
                           display: 'flex',
                           justifyContent: 'center',
                           alignItems: 'center',
                           marginBottom: '1.2rem',
                        }}>
                        <Typography sx={{
                           textAlign: 'center',
                           fontSize: '1.6rem',
                           borderBottom: '1px solid #2d4850',
                        }}>About the Resort
                        </Typography>
                        <Tooltip sx={{
                           marginLeft: '0.8rem',
                        }} arrow
                           TransitionComponent={Fade}
                           TransitionProps={{ timeout: 400 }}
                           title='Disclaimer: These numbers were fetched from skimap.org and many of them appear to be quite inaccurate. Check official website for more accurate data.'>
                           <ErrorIcon />
                        </Tooltip>
                     </Stack>
                     <ResortStats skiMapData={props.skiMapData} />
                  </Paper>
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
                  {!resort.twitter ? <DataNotPresent /> : <TweetPanel resort={resort} />}
               </Grid>
            </Grid>
         </Paper>
         {
            !resort.webcams ? <DataNotPresent dataName='Web Cam' /> :
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
                  </Grid></>
         }
      </>
   );
}
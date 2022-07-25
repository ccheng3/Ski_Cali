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
import CustomButton from '../CustomButton/CustomButton';

import WindyLogo from '../../images/windy-logo.png';

import './ResortDetail.css';

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
                  maxWidth: '800px'
               }}>
                  <Paper sx={{
                     marginTop: '2.4rem',
                     boxShadow: '5',
                     padding: '1.2rem 0',
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
                     <ul style={{
                        listStyle: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                     }}>
                        <li className='resort-detail-stat'>
                           Opening Year: {props.skiMapData.opening_year}</li>
                        <li className='resort-detail-stat'>
                           Total Lift Count: {props.skiMapData.lift_count}</li>
                        <li className='resort-detail-stat'>
                           Total Run Count: {props.skiMapData.run_count}</li>
                        <li className='resort-detail-stat'>
                           Hourly Lift Capacity: {props.skiMapData.hourly_lift_capacity} passengers</li>
                        <li className='resort-detail-stat'>
                           Longest Run: {Math.floor(props.skiMapData.longest_run / 3)} feet/{props.skiMapData.longest_run} meters</li>
                        <li className='resort-detail-stat'>
                           Skiable Acreage: {props.skiMapData.skiable_acreage} total acres</li>
                        <li className='resort-detail-stat'>
                           Annual Snowfall: {Math.floor(props.skiMapData.annual_snowfall / 2.54)} inches / {props.skiMapData.annual_snowfall}cm</li>
                        <li className='resort-detail-stat'>
                           Terrain Park? {props.skiMapData.terrain_park}</li>
                        <li className='resort-detail-stat'>
                           Night Skiing? {props.skiMapData.night_skiing}</li>
                        <li className='resort-detail-stat'>
                           Latitude/Longitude: ({props.skiMapData.latitude.toFixed(3)}, {props.skiMapData.longitude.toFixed(3)})</li>
                        <li className='resort-detail-stat'>
                           Top Elevation: {Math.floor(props.skiMapData.top_elevation) * 3} feet / {props.skiMapData.top_elevation} meters</li>
                        <li className='resort-detail-stat'>
                           <CustomButton sx={{
                              backgroundColor: '#ed6c02',
                              color: '#2d4850',
                              borderColor: '#2d4850',
                           }} variant='outlined' href={props.skiMapData.official_website}>
                              {`${props.skiMapData.name} Official Website`}
                           </CustomButton></li>
                     </ul>
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
                  <TweetPanel resort={resort} />
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
import { Typography, Stack } from '@mui/material';
import React from 'react';

import CustomButton from '../CustomButton/CustomButton';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

export default function ResortStats(props) {
   let skiMaps = [];
   for (let i = 0; i <= 2; ++i) {
      skiMaps.push(
         <li className='resort-detail-stat' key={props.skiMapData.ski_maps[i].id}>
            <CustomButton variant='contained'
               href={props.skiMapData.ski_maps[i].media.original.url}>
               {`${props.skiMapData.ski_maps[i].metadata.year_published}-${parseInt(props.skiMapData.ski_maps[i].metadata.year_published) + 1} Season Ski Resort Map`}
            </CustomButton>
         </li>
      )
   }

   return (
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
         <Stack sx={{
            marginTop: '2.4rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
         }}>
            <Typography variant='h4'>
               <DownloadForOfflineIcon sx={{
                  marginRight: '1.2rem',
                  fontSize: '2.4rem',
               }} />
               Get the Ski Maps Here</Typography>
            {skiMaps}
         </Stack>
      </ul>
   );
}
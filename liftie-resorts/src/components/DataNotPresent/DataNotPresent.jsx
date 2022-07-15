import React from 'react';

import { Paper } from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

export default function DataNotPresent(props) {
   return (
      <Paper style={{
         display: 'flex',
         alignItems: 'center',
         padding: '2.4rem 3.6rem',
      }}>
         <div>No {props.dataName} Data Provided...
         </div><SentimentVeryDissatisfiedIcon fontSize='large' sx={{ color: 'brown' }} />
      </Paper>
   );
}
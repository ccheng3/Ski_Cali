import React from 'react';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FlagIcon from '@mui/icons-material/Flag';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import HelpIcon from '@mui/icons-material/Help';
import DataNotPresent from '../DataNotPresent/DataNotPresent';

import {
   TableContainer,
   Table, TableHead, TableBody,
   TableRow, TableCell, Paper,
   Accordion, AccordionSummary,
   AccordionDetails, Typography,
   Container, Tooltip, IconButton, Zoom
} from '@mui/material';

export default function LiftStatus(props) {
   const liftStatusDisclaimerText = 'Not all lifts are provided by Liftie API, unfortunately.';
   // Empty object means that no lift status data provided.
   if (Object.keys(props.status).length === 0) {
      return <DataNotPresent dataName='Lift Status' />;
   }
   const liftStatus = [];
   for (const lift in props.status) {
      const statusString = props.status[lift];
      const liftName = lift;
      // capitalize the lift's status 
      const formattedStatusString = statusString.charAt(0).toUpperCase() + statusString.slice(1);
      liftStatus.push([liftName, formattedStatusString]);
   }
   const liftStatusIcons = {
      'Open': <CheckCircleIcon fontSize='medium' sx={{ color: 'green' }} />,
      'Hold': <FlagIcon fontSize='medium' sx={{ color: 'orange' }} />,
      'Scheduled': <QueryBuilderIcon fontSize='medium' sx={{ color: 'blue' }} />,
      'Closed': <CloseIcon fontSize='medium' sx={{ color: 'red' }} />
   };

   return (
      <Accordion sx={{
         boxShadow: 5
      }}>
         <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
         >
            <Typography>
               View Lift Status
               <Tooltip title={liftStatusDisclaimerText} arrow TransitionComponent={Zoom} >
                  <IconButton>
                     <HelpIcon />
                  </IconButton>
               </Tooltip>
            </Typography>
         </AccordionSummary>
         <AccordionDetails>
            <TableContainer component={Paper}>
               <Table aria-label='lift status table'>
                  <TableHead>
                     <TableRow>
                        <TableCell>Lift</TableCell>
                        <TableCell>Current Status</TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {liftStatus.map((lift) => {
                        return (
                           <TableRow key={lift[0]} >
                              <TableCell>{lift[0]}</TableCell>
                              <TableCell style={{
                                 display: 'flex',
                                 alignItems: 'center',
                              }}>
                                 <Container>
                                    {lift[1]}
                                 </Container>
                                 <Container>
                                    {/* render the different lift status icon based upon
                                 most recent status report */}
                                    {liftStatusIcons[lift[1]]}
                                 </Container>
                              </TableCell>
                           </TableRow>
                        );
                     })}
                  </TableBody>
               </Table>
            </TableContainer >
         </AccordionDetails>
      </Accordion >

   );
}
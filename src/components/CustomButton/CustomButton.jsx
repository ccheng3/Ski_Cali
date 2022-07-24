import React from 'react';

import { Button } from '@mui/material';

export default function CustomButton(props) {
   return (
      <Button sx={props.sx}
         variant={props.variant}
         href={props.href} target='_blank'
         rel='noopener noreferrer'>
         {props.children}
      </Button>
   )
}
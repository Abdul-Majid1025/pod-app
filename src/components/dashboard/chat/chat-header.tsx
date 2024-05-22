import { Box, Typography } from '@mui/material';
import React from 'react';
import { PlusIcon } from '../../../icons/plus-icon';
import { ArrowIcon } from '../../../icons/arrow-icon';

const headerLayoutStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '350px',
  height: '93px',
  padding: '24px',
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
}

const titleStyles = {
  fontWeight: '600',
  fontSize: '20px',
  lineHeight: '28px',
}

const countStyles = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#EDF2F7',
  borderRadius: '24px',
  padding: '2px 12px',
  height: '22px',
  ".MuiTypography-root": {
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '18px',
  }
}

export const ChatHeader = () => {

  return (
    <Box sx={headerLayoutStyles}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography sx={titleStyles}>Chat</Typography>
        <ArrowIcon sx={{ marginLeft: '6px', marginRight: '10px' }} />
        <Box sx={countStyles}>
          <Typography>6</Typography>
        </Box>
      </Box>
      <Box>
        <PlusIcon />
      </Box>
    </Box>
  );
};
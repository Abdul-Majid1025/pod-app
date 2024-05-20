import { Badge, Box, Typography } from '@mui/material';
import React from 'react';

const headerLayoutStyles = {
  width: '350px',
  height: '93px',
  padding: '24px',
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
}

export const ChatHeader = () => {

  return (
    <Box sx={headerLayoutStyles}>
      <Typography>Chat</Typography>
      <Badge badgeContent={4} color="secondary"></Badge>
    </Box>
  );
};
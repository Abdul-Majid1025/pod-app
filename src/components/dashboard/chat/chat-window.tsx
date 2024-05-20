import { Badge, Box, Typography } from '@mui/material';
import React from 'react';

const headerLayoutStyles = {
  width: '100%',
  height: '93px',
  padding: '24px',
  border: '1px solid',
  borderColor: 'rgba(0, 0, 0, 0.1)',
}

const footerStyles = {
  width: '100%',
  height: '77px',
  padding: '16px 24px',
  border: '1px solid',
  borderColor: 'rgba(0, 0, 0, 0.1)',
}

const chatAreaStyles = {
  flex: 1,
  overflow: 'auto',
  padding: '24px',
  borderLeft: '1px solid rgba(0, 0, 0, 0.1)',
};

export const ChatWindow = () => {

  return (
    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Box sx={headerLayoutStyles}>
        <Typography>Chat</Typography>
        <Badge badgeContent={4} color="secondary"></Badge>
      </Box>
      <Box sx={chatAreaStyles}>
        {/* Chat messages will go here */}
      </Box>
      <Box sx={footerStyles}>
        <Box component='input' />
      </Box>
    </Box>
  );
};
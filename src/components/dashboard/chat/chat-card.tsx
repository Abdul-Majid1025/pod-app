import { Box, Typography } from '@mui/material';
import React from 'react';
import { PersonAvatar } from './person-avatar';


export const ChatCard = () => {

  return (
    <Box sx={{ display: 'flex', height: '48px', marginTop: '32px' }}>
      <PersonAvatar sx={{ marginRight: '16px' }} />
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ fontWeight: '600', fontSize: '14px' }}>Elmer Laverty</Typography>
          <Typography sx={{ fontWeight: '500', fontSize: '14px', color: 'rgba(0, 0, 0, 0.3)' }}>12m</Typography>
        </Box>
        <Typography sx={{ fontWeight: '500', fontSize: '12px', color: 'rgba(0, 0, 0, 0.4)' }}>Haha oh man!</Typography>
      </Box>
    </Box>
  );
};
import { Box, Typography } from '@mui/material';
import React from 'react';
import { PersonAvatar } from './person-avatar';

const myChatWrapper = {
  flexDirection: 'row-reverse'
}

type Props = {
  isMyChat?: boolean;
}

export const ChatPill = (props: Props) => {
  const { isMyChat } = props;
  return (
    <Box sx={{ display: 'flex', marginTop: '32px', ...(isMyChat && myChatWrapper) }}>
      <PersonAvatar sx={{ ...(isMyChat ? { marginLeft: '16px' } : { marginRight: '16px' }) }} />
      <Box sx={{ display: 'flex', flexDirection: 'column', ...(isMyChat && { alignItems: 'end' }) }}>
        <Box sx={{ backgroundColor: '#F3F3F3', padding: '8px 16px', borderRadius: '12px', marginBottom: '10px', width: 'fit-content', ...(isMyChat && { backgroundColor: '#597EF7', color: '#fff' }) }}>
          <Typography sx={{ width: 'fit-content' }}>omg, this is amazing</Typography>
        </Box>
        <Box sx={{ backgroundColor: '#F3F3F3', padding: '8px 16px', borderRadius: '12px', marginBottom: '10px', width: 'fit-content', ...(isMyChat && { backgroundColor: '#597EF7', color: '#fff' }) }}>
          <Typography sx={{ width: 'fit-content' }}>perfect! ✅</Typography>
        </Box>
        <Typography sx={{ fontSize: '12px', color: '#667085' }}>11:40am</Typography>
      </Box>
    </Box>
  );
};
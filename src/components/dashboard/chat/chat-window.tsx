import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { ChatPill } from './chat-pill';
import { SendIcon } from '../../../icons/send-icon';
import { PersonAvatar } from './person-avatar';

const headerLayoutStyles = {
  width: '100%',
  height: '93px',
  padding: '24px',
  border: '1px solid',
  borderColor: 'rgba(0, 0, 0, 0.1)',
  display: 'flex',
}

const footerStyles = {
  display: 'flex',
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

const inputStyles = {
  height: '44px',
  width: '100%',
  border: '1px solid #D0D5DD',
  borderRadius: '8px',
  padding: '10px 14px',
  marginRight: '12px'
}

const sendBtnStyles = {
  backgroundColor: '#597EF7',
  '.MuiButton-icon': {
    marginRight: '0px'
  }
}

const personNameStyles = {
  fontWeight: '600',
  fontSize: '20px',
  lineHeight: '28px',
}

const statusStyles = {
  fontWeight: '500',
  fontSize: '12px',
  lineHeight: '18px',
  opacity: '0.6',
  marginLeft: '8px'
}

export const ChatWindow = () => {

  return (
    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Box sx={headerLayoutStyles}>
        <PersonAvatar sx={{ marginRight: '16px' }} />
        <Box>
          <Typography sx={personNameStyles}>Florencio Dorrance</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '10px', height: '10px', backgroundColor: '#68D391', borderRadius: '50%' }} ></Box>
            <Typography sx={statusStyles}>Online</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={chatAreaStyles}>
        {/* Chat messages will go here */}
        <ChatPill />
        <ChatPill isMyChat={true} />
      </Box>
      <Box sx={footerStyles}>
        <Box sx={inputStyles} component='input' placeholder='Message' />
        <Button sx={sendBtnStyles} startIcon={<SendIcon />} variant='contained'></Button>
      </Box>
    </Box>
  );
};
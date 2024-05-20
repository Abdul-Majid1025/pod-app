import { Box } from '@mui/material';
import React from 'react';
import { MainNav } from '../../../components/dashboard/layout/main-nav';
import { ChatHeader } from '../../../components/dashboard/chat/chat-header';
import { ChatWindow } from '../../../components/dashboard/chat/chat-window';
import { PreviousChats } from '../../../components/dashboard/chat/previous-chats';

export const ChatPage = () => {

  return (
    <Box sx={{ display: 'flex' }}>
      {/* <MainNav /> */}
      <PreviousChats />
      <ChatWindow />
    </Box>
  );
};
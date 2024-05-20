import { Box } from '@mui/material';
import React from 'react';
import { ChatHeader } from './chat-header';
import { SearchBar } from '../../common/searchbar';
import { ChatCard } from './chat-card';


export const PreviousChats = () => {

  return (
    <Box>
      <ChatHeader />
      <Box sx={{ padding: '12px 24px' }}>
        <SearchBar sx={{ backgroundColor: '#fff', height: '44px' }} />
        {[0, 1, 2, 3, 4, 5].map(() => <ChatCard />)}
      </Box>
    </Box>
  );
};
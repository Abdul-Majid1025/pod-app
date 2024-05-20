import { Box, Button, ButtonGroup } from '@mui/material';
import React from 'react';
import { SearchBar } from '../../common/searchbar';
import { outlineBtnStyles } from '../../../util/util-styles';

export const DashboardHeader = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '45px', width: '100%' }}>
      <ButtonGroup variant="outlined" aria-label="Basic button group">
        <Button sx={outlineBtnStyles}>Today</Button>
        <Button sx={outlineBtnStyles}>Last 7 days</Button>
      </ButtonGroup>
      <SearchBar sx={{ ...outlineBtnStyles, boxShadow: 'unset' }} />
      <Button sx={outlineBtnStyles} variant='outlined'>Refresh</Button>
    </Box>
  );
};
import { Box, Button, ButtonGroup } from '@mui/material';
import React from 'react';
import { SearchBar } from '../../common/searchbar';
import { outlineBtnStyles } from '../../../util/util-styles';
import { DownloadIcon } from '../../../icons/download-icon';

type Props = {
  type: 'dashboard' | 'orders' | 'orderDetail' | 'driver'
}
export const DashboardHeader = ({ type }: Props) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '45px', width: '100%' }}>
      {type === 'dashboard' ?
        <ButtonGroup variant="outlined" aria-label="Basic button group">
          <Button sx={outlineBtnStyles}>Today</Button>
          <Button sx={outlineBtnStyles}>Last 7 days</Button>
        </ButtonGroup> : null}
      {type === 'orderDetail' ?
        <ButtonGroup variant="outlined" aria-label="Basic button group">
          <Button sx={outlineBtnStyles}>Download PDF</Button>
          <Button sx={outlineBtnStyles}>Email PDF</Button>
        </ButtonGroup> : null}
      <SearchBar sx={{ ...outlineBtnStyles, boxShadow: 'unset', margin: '0px 10px' }} />
      <Box sx={{ display: 'flex' }}>
        <Button sx={outlineBtnStyles} variant='outlined'>Refresh</Button>
        {type === 'orders' ? <Button variant='contained' sx={{ height: '44px', borderRadius: '8px', marginLeft: '16px', whiteSpace: 'nowrap' }} startIcon={<DownloadIcon />}>Export CSV</Button> : null}
      </Box>
    </Box>
  );
};
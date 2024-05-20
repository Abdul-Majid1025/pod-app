import { Box, SxProps, Typography } from '@mui/material';
import * as React from 'react';

export interface Props {
  sx?: SxProps;
  icon: JSX.Element;
  label: string | number;
}

export function IconLabelEntry(props: Props): React.JSX.Element {
  const { sx, icon, label } = props;
  return (
    <Box sx={{ ...sx, display: 'flex', alignItems: 'center' }}>
      {icon}
      <Typography sx={{ ml: 1, fontSize: '12px', lineHeight: '18px' }}>{label}</Typography>
    </Box>
  );
}

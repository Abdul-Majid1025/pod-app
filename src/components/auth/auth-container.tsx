import { Box, Typography } from '@mui/material';
import React, { ReactNode } from 'react';

const authWrapper = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '368px',
  borderRadius: '12px',
  padding: '24px',
  backgroundColor: '#fff',
  boxShadow: '0px 5px 20px 0px #0000000D'
}

type Props = {
  icon: JSX.Element;
  title: string;
  description?: string;
  children: ReactNode;
}

export const AuthContainer = (props: Props) => {
  const { icon, title, description, children } = props;
  return (
    <Box sx={authWrapper}>
      <Box sx={{ marginBottom: '24px', width: 'fit-content', margin: '0 auto' }}>{icon}</Box>
      <Typography variant='h4' sx={{ textAlign: 'center', marginBottom: '12px' }}>{title}</Typography>
      {description ? <Typography sx={{ textAlign: 'center', marginBottom: '24px', color: '#667085' }}>{description}</Typography> : null}
      {children}
    </Box>
  );
};
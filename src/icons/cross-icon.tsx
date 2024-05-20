import { SxProps } from '@mui/material';
import React, { CSSProperties } from 'react';

type Props = {
  sx?: SxProps;
  onClick?: () => void;
}

export const CrossIcon = (props: Props) => {
  const { sx, onClick } = props;
  return (
    <svg style={sx as CSSProperties} onClick={onClick} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 6L6 18M6 6L18 18" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};
import React, { CSSProperties } from 'react';

type Props = {
  sx?: CSSProperties;
}

export const ArrowIcon = ({ sx }: Props) => {
  return (
    <svg style={sx} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.28 5.9668L8.9333 10.3135C8.41997 10.8268 7.57997 10.8268 7.06664 10.3135L2.71997 5.9668" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};
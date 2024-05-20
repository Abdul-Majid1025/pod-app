import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Notes } from '../../../types/orders';

const titleStyles = {
  fontWeight: '700',
  fontSize: '20px',
  lineHeight: '28px',
  color: '#111827',
  marginBottom: '2px',
}

const keyStyles = {
  fontWeight: '600',
  fontSize: '14px',
  lineHeight: '22px',
  color: '#000',
  marginTop: '12px',
  marginBottom: '4px',
}

const valueStyles = {
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '22px',
  opacity: '0.3'
}

type Props = {
  title: string,
  data: Notes[]
}

export function OrderNotes({ title, data }: Props): React.JSX.Element {
  return (
    <Box>
      <Typography sx={titleStyles}>{title}</Typography>
      <Box>
        {data.map(note => (
          <>
            <Typography sx={keyStyles}>{note.key}</Typography>
            <Typography sx={valueStyles}>{note.value}</Typography>
          </>
        ))}
      </Box>
    </Box>
  );
}



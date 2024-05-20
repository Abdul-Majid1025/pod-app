import * as React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { SearchIcon } from '../../icons/search-icon';
import { SxProps } from '@mui/material';

type Props = {
  sx?: SxProps;
}

export function SearchBar({ sx }: Props): React.JSX.Element {
  return (
    <OutlinedInput
      defaultValue=""
      fullWidth
      placeholder="Search"
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
      sx={{ ...sx, maxWidth: '500px' }}
    />
  );
}

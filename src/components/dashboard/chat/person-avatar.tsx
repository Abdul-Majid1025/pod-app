import { Box, SxProps } from '@mui/material';
import React from 'react';


type Props = {
  sx?: SxProps;
}

export const PersonAvatar = (props: Props) => {
  const { sx } = props;
  return (
    <Box component='img' src='https://s3-alpha-sig.figma.com/img/0a16/cb0e/41db33331f39452bcb2488e5873e3a3e?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dbN~cjYMS3Jfkb5NN-1D7IMs5Wwop3WFCeOaNqDFCvvYh5Xg1-NoQblVppwVhJ3MgFBqhpLx77tEwuDBLpLJ1JoRbC1Zlna85rtO9F5WZDmhOZV56UZN7aZi3p9yA~5QF5de2IHHAvfJ8~iGaS9GZ71GESQlsYQNRf6jN2jT5JgjW-51fuXWjyscPnuJOY-u5CNjx14TPXubsqa-khRX~vYenXrrUWXmKpNGpzU8oXXjw4sdRmuLcnGA1xWMZpTK9El0yKtlHZkJXmByzQkiF77v7qIgmdMYDZye2~zmQnKGZPWExYCumQQvXE9BP7u7dI3-KStrqYSBWitthS59zw__' sx={{ height: '48px', width: '48px', borderRadius: '8px', ...sx }} />
  );
};
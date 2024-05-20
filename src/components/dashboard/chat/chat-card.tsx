import { Box, Typography } from '@mui/material';
import React from 'react';


export const ChatCard = () => {

  return (
    <Box sx={{ display: 'flex', height: '48px', marginTop: '32px' }}>
      <Box component='img' src='https://s3-alpha-sig.figma.com/img/0a16/cb0e/41db33331f39452bcb2488e5873e3a3e?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dbN~cjYMS3Jfkb5NN-1D7IMs5Wwop3WFCeOaNqDFCvvYh5Xg1-NoQblVppwVhJ3MgFBqhpLx77tEwuDBLpLJ1JoRbC1Zlna85rtO9F5WZDmhOZV56UZN7aZi3p9yA~5QF5de2IHHAvfJ8~iGaS9GZ71GESQlsYQNRf6jN2jT5JgjW-51fuXWjyscPnuJOY-u5CNjx14TPXubsqa-khRX~vYenXrrUWXmKpNGpzU8oXXjw4sdRmuLcnGA1xWMZpTK9El0yKtlHZkJXmByzQkiF77v7qIgmdMYDZye2~zmQnKGZPWExYCumQQvXE9BP7u7dI3-KStrqYSBWitthS59zw__' sx={{ height: '48px', width: '48px', borderRadius: '8px', marginRight: '16px' }} />
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ fontWeight: '600', fontSize: '14px' }}>Elmer Laverty</Typography>
          <Typography sx={{ fontWeight: '500', fontSize: '14px', color: 'rgba(0, 0, 0, 0.3)' }}>12m</Typography>
        </Box>
        <Typography sx={{ fontWeight: '500', fontSize: '12px', color: 'rgba(0, 0, 0, 0.4)' }}>Haha oh man!</Typography>
      </Box>
    </Box>
  );
};
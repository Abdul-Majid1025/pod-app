import { Box, Card, CardContent, Stack, SxProps, Typography } from '@mui/material';
import * as React from 'react';

export interface StatsCardProps {
  sx?: SxProps;
  value: string | number;
  text: string;
  icon: string;
}

export function StatsCard(props: StatsCardProps): React.JSX.Element {
  const { sx, value, text, icon } = props;
  return (
    <Card sx={{ ...sx, borderRadius: '8px', backgroundImage: 'linear-gradient(to top right, #e0e4f4, #f8f4f4, #f8ecdc)', }}>
      <CardContent>
        <Stack spacing={3}>
          <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
            <Stack spacing={1}>
              <Typography color="text.secondary" variant="overline">
                {text}
              </Typography>
              <Typography variant="h4">{value}</Typography>
            </Stack>
            <Box
              component="img"
              sx={{
                height: 70,
                width: 70,
              }}
              src={icon}
            />
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { alpha, styled, useTheme } from '@mui/material/styles';
import type { SxProps } from '@mui/material/styles';
import type { ApexOptions } from 'apexcharts';
import ApexChart from 'react-apexcharts';
import { Box, Stack, Typography } from '@mui/material';

export interface BarGraphProps {
  title: string;
  chartSeries: { name: string; data: number[] }[];
  sx?: SxProps;
}

export function BarGraph({ title, chartSeries, sx }: BarGraphProps): React.JSX.Element {
  const theme = useTheme();
  const colors = [theme.palette.primary.main, alpha(theme.palette.primary.main, 0.25)]
  const chartOptions = useChartOptions(colors);
  const Chart = styled(ApexChart)``;

  return (
    <Card sx={sx}>
      <CardHeader
        action={
          <Button color="inherit" size="small">
            Sync
          </Button>
        }
        title={title}
      />
      <CardContent sx={{ paddingTop: '0px' }}>
        <Chart height={350} options={chartOptions} series={chartSeries} type="bar" width="100%" />
        <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'center' }}>
          {chartSeries.map((item, index) => {
            return (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ backgroundColor: colors[index], height: '16px', width: '30px', borderRadius: '4px' }}></Box>
                <Typography variant="body2" sx={{ margin: '0px 8px' }}>{item?.name}</Typography>
              </Box>
            );
          })}
        </Stack>
      </CardContent>
    </Card>
  );
}

function useChartOptions(colors: string[]): ApexOptions {
  const theme = useTheme();

  return {
    chart: { background: 'transparent', stacked: false, toolbar: { show: false } },
    colors: colors,
    dataLabels: { enabled: false },
    fill: { opacity: 1, type: 'solid' },
    grid: {
      borderColor: theme.palette.divider,
      strokeDashArray: 2,
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: true } },
    },
    legend: { show: false },
    plotOptions: { bar: { columnWidth: '14px', borderRadius: 2 } },
    stroke: { colors: ['transparent'], show: true, width: 2 },
    theme: { mode: theme.palette.mode },
    xaxis: {
      axisBorder: { color: theme.palette.divider, show: true },
      axisTicks: { color: theme.palette.divider, show: true },
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      labels: { offsetY: 5, style: { colors: theme.palette.text.secondary } },
    },
    yaxis: {
      labels: {
        formatter: (value) => (value > 0 ? `${value}K` : `${value}`),
        offsetX: -10,
        style: { colors: theme.palette.text.secondary },
      },
    },
  };
}

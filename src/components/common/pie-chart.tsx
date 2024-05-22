import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Stack from '@mui/material/Stack';
import { styled, useTheme } from '@mui/material/styles';
import type { SxProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import type { ApexOptions } from 'apexcharts';
import ApexChart from 'react-apexcharts';
import { Box } from '@mui/material';


export interface PieChartProps {
  title: string;
  chartSeries: number[];
  labels: string[];
  sx?: SxProps;
}

export function PieChart({ chartSeries, labels, sx, title }: PieChartProps): React.JSX.Element {
  const Chart = styled(ApexChart)``;
  const colors = ['#08A765', '#1070CA', '#EC4C47'];
  const chartOptions = useChartOptions(labels, colors);

  return (
    <Card sx={sx}>
      <CardHeader title={title} />
      <CardContent>
        <Stack spacing={2}>
          <Chart height={300} options={chartOptions} series={chartSeries} type="donut" width="100%" />
          <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between', marginTop: '20px', flexWrap: 'wrap' }}>
            {chartSeries.map((item, index) => {
              const label = labels[index];
              return (
                <Box key={label} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ backgroundColor: colors[index], height: '16px', width: '30px', borderRadius: '4px' }}></Box>
                  <Typography variant="body2" sx={{ margin: '0px 8px' }}>{label}</Typography>
                  <Typography color={colors[index]} variant="subtitle2">
                    {item}%
                  </Typography>
                </Box>
              );
            })}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

function useChartOptions(labels: string[], colors: string[]): ApexOptions {
  const theme = useTheme();

  return {
    chart: { background: 'transparent' },
    colors,
    dataLabels: { enabled: false },
    labels,
    legend: { show: false },
    plotOptions: { pie: { expandOnClick: false } },
    states: { active: { filter: { type: 'none' } }, hover: { filter: { type: 'none' } } },
    stroke: { width: 0 },
    theme: { mode: theme.palette.mode },
    tooltip: { fillSeriesColor: false },
  };
}

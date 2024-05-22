import { Box, Chip, Grid } from '@mui/material';
import React from 'react';
import { DashboardHeader } from '../../../components/dashboard/home/dashboard-header';
import { StatsCard } from '../../../components/common/stats-card';
import dayjs from 'dayjs';
import { PieChart } from '../../../components/common/pie-chart';
import { BarGraph } from '../../../components/common/bar-graph';
import { DataTable } from '../../../components/common/data-table';
import { getStatsIcon } from '../../../util/utility-functions';
import { ColumnConfig } from '../../../types/data-table';
import { MainNav } from '../../../components/dashboard/layout/main-nav';



interface Order {
  id: string,
  customer: { name: string },
  amount: number,
  status: 'pending' | 'delivered' | 'cancelled';
  createdAt: Date,
  address: string,
  postalCode: string,
  driver: string;
}


export const DashboardPage = () => {

  const statusMap = {
    pending: { label: 'Pending', color: 'warning' },
    delivered: { label: 'Delivered', color: 'success' },
    cancelled: { label: 'Cancelled', color: 'error' },
  } as const;

  const columns: ColumnConfig<Order>[] = [
    {
      label: 'Order No.',
      render: (order) => order.id,
    },
    {
      label: 'Customer',
      render: (order) => order.customer.name,
    },
    {
      label: 'Address',
      render: (order) => order.address,
    },
    {
      label: 'Post Code',
      render: (order) => order.postalCode,
    },
    {
      label: 'Status',
      render: (order) => {
        const { label, color } = statusMap[order.status] ?? { label: 'Unknown', color: 'default' };
        return <Chip color={color} label={label} size="small" />;
      },
    },
    {
      label: 'Driver',
      render: (order) => order.driver,
    },
  ];

  const orders: Order[] = [
    {
      id: 'ORD-007',
      customer: { name: 'Ekaterina Tankova' },
      amount: 30.5,
      status: 'pending',
      address: 'Unit 3 Jupiter House, sdfsdfds',
      postalCode: 'BB5 5BY',
      createdAt: dayjs().subtract(10, 'minutes').toDate(),
      driver: 'David'
    },
    {
      id: 'ORD-006',
      customer: { name: 'Cao Yu' },
      amount: 25.1,
      status: 'delivered',
      address: 'Unit 3 Jupiter House, sdfsdfds',
      postalCode: 'BB5 5BY',
      createdAt: dayjs().subtract(10, 'minutes').toDate(),
      driver: 'David'
    },
    {
      id: 'ORD-004',
      customer: { name: 'Alexa Richardson' },
      amount: 10.99,
      status: 'cancelled',
      address: '  3 Jupiter House, sdfsdfds',
      postalCode: 'BB5 5BY',
      createdAt: dayjs().subtract(10, 'minutes').toDate(),
      driver: 'David'
    },
    {
      id: 'ORD-003',
      customer: { name: 'Anje Keizer' },
      amount: 96.43,
      status: 'pending',
      address: 'Unit 3 Jupiter House, sdfsdfds',
      postalCode: 'BB5 5BY',
      createdAt: dayjs().subtract(10, 'minutes').toDate(),
      driver: 'David'
    },
    {
      id: 'ORD-002',
      customer: { name: 'Clarke Gillebert' },
      amount: 32.54,
      status: 'delivered',
      address: 'Unit 3 Jupiter House, sdfsdfds',
      postalCode: 'BB5 5BY',
      createdAt: dayjs().subtract(10, 'minutes').toDate(),
      driver: 'David'
    },
    {
      id: 'ORD-001',
      customer: { name: 'Adam Denisov' },
      amount: 16.76,
      status: 'delivered',
      address: 'Unit 3 Jupiter House, sdfsdfds',
      postalCode: 'BB5 5BY',
      createdAt: dayjs().subtract(10, 'minutes').toDate(),
      driver: 'David'
    },
  ];

  const stats = [
    {
      title: 'Pending Deliveries',
      value: 25,
    },
    {
      title: 'Delivered',
      value: 15,
    },
    {
      title: 'Undelivered',
      value: 3,
    },
    {
      title: 'Vehicles Online',
      value: 5,
    }
  ]

  return (
    <Box>
      <MainNav>
        <DashboardHeader type='dashboard' />
      </MainNav>
      <Grid container spacing={3} sx={{ marginTop: '10px' }}>
        {stats?.map((stat) =>
          <Grid item lg={3} sm={6} xs={12}>
            <StatsCard sx={{ height: '100%' }} value={stat.value} text={stat?.title} icon={getStatsIcon(stat?.title)} />
          </Grid>)}
        <Grid item lg={8} xs={12}>
          <BarGraph
            title="Sales"
            chartSeries={[
              { name: 'Max', data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20] },
              { name: 'Avg', data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13] },
            ]}
            sx={{ height: '100%', borderRadius: '8px' }}
          />
        </Grid>
        <Grid item lg={4} md={12} xs={12}>
          <PieChart title="Delivery Status" chartSeries={[63, 15, 22]} labels={['Delivered', 'Pending', 'Cancel']} sx={{ height: '100%', borderRadius: '8px' }} />
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
          <DataTable
            data={orders}
            sx={{ height: '100%', borderRadius: '8px' }}
            columns={columns}
            selection={true}
            pagination={true}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
import { Box, Chip } from '@mui/material';
import React from 'react';
import { DashboardHeader } from '../../../components/dashboard/home/dashboard-header';
import dayjs from 'dayjs';
import { DataTable } from '../../../components/common/data-table';
import { ColumnConfig } from '../../../types/data-table';
import { MainNav } from '../../../components/dashboard/layout/main-nav';
import { EyeIcon } from '../../../icons/eye-icon';
import { useNavigate } from 'react-router-dom';

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


export const OrdersPage = () => {
  const navigate = useNavigate();

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
    {
      label: '',
      render: (image) => <EyeIcon onClick={() => navigate('/order')} />,
      width: '50px'
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

  return (
    <Box>
      <MainNav>
        <DashboardHeader type='orders' />
      </MainNav>
      <DataTable
        data={orders}
        sx={{ height: '100%', borderRadius: '8px', marginTop: '32px' }}
        columns={columns}
        selection={true}
        pagination={true}
      />
    </Box>
  );
};
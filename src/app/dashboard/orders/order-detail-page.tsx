import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { DashboardHeader } from '../../../components/dashboard/home/dashboard-header';
import { MainNav } from '../../../components/dashboard/layout/main-nav';
import { StatsCard } from '../../../components/common/stats-card';
import { getStatsIcon } from '../../../util/utility-functions';
import { OrderNotes } from '../../../components/dashboard/order/notes';
import { PersonCard } from '../../../components/dashboard/order/person-card';
import { DataTable } from '../../../components/common/data-table';
import { ColumnConfig } from '../../../types/data-table';
import { Image } from '../../../types/orders';
import { EyeIcon } from '../../../icons/eye-icon';

const cardStyles = {
  height: '350px',
  borderRadius: '8px',
  padding: '24px',
  border: '1px solid #D0D5DD',
  boxShadow: '0px 1px 2px 0px #1018280D',
  backgroundColor: '#fff'
}

export const OrderDetailPage = () => {

  const columns: ColumnConfig<Image>[] = [
    {
      label: 'Image',
      render: (image) => <Typography sx={{ fontWeight: '500' }}>{image.name}</Typography>,
    },
    {
      label: 'Date & time',
      render: (image) => <Typography sx={{ color: '#667085' }}>{image.dateTime}</Typography>,
    },
    {
      label: '',
      render: (image) => <EyeIcon />,
      width: '50px'
    },
  ];

  const images = [
    {
      id: 1,
      name: '000001234_img1.png',
      dateTime: '09/03/2023 15:20:00',
    },
    {
      id: 2,
      name: '000001234_img2.png',
      dateTime: '10/03/2023 10:15:00',
    },
    {
      id: 3,
      name: '000001234_img3.png',
      dateTime: '11/03/2023 08:30:00',
    },
    {
      id: 4,
      name: '000001234_img4.png',
      dateTime: '12/03/2023 12:45:00',
    },
    {
      id: 5,
      name: '000001234_img5.png',
      dateTime: '12/03/2023 12:45:00',
    },
  ]

  const stats = [
    {
      title: 'Status',
      value: 'Delivered',
    },
    {
      title: 'Date Of Delivery',
      value: '09-03-23',
    },
    {
      title: 'Driver',
      value: 'Michael',
    },
    {
      title: 'Signed By',
      value: 'My Happy',
    }
  ]

  const notes = [
    {
      key: 'Delivered on Time',
      value: 'April 4',
    },
    {
      key: 'Budget',
      value: 'April 4',
    },
    {
      key: 'Accounts',
      value: 'April 4',
    },
    {
      key: 'Accounts',
      value: 'April 4',
    }
  ]

  const person = {
    name: 'Mr Jones',
    email: 'jones@gmail.com',
    contactNo: 123343495443,
    address: 'California, Street 1 US'
  };

  return (
    <Box>
      <MainNav>
        <DashboardHeader type='orderDetail' />
      </MainNav>
      <Grid container spacing={3} sx={{ marginTop: '10px' }}>
        {stats?.map((stat) =>
          <Grid item lg={3} sm={6} xs={12}>
            <StatsCard sx={{ height: '100%' }} value={stat.value} text={stat?.title} icon={getStatsIcon(stat?.title)} />
          </Grid>)}
        <Grid item lg={4} xs={12}>
          <Box sx={cardStyles}>
            <PersonCard person={person} />
          </Box>
        </Grid>
        <Grid item lg={4} xs={12}>
          <Box sx={cardStyles}>
            <OrderNotes title="Notes" data={notes} />
          </Box>
        </Grid>
        <Grid item lg={4} xs={12}>
          <Box sx={{ height: '350px', boxShadow: '0px 1px 2px 0px #1018280D' }}>
            <Box component="img" src="/temp-map.png" sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '8px',
            }}></Box>
          </Box>
        </Grid>
        <Grid item lg={6} xs={12}>
          <Box sx={{ height: '332px', borderRadius: '8px', border: '1px solid #D0D5DD', boxShadow: '0px 1px 2px 0px #1018280D', backgroundColor: '#fff' }}>
            <Box component="img" src="/temp-sign.png" sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '8px',
            }}></Box>
          </Box>
        </Grid>
        <Grid item lg={6} xs={12}>
          <Box sx={{ height: '332px', borderRadius: '8px', border: '1px solid #D0D5DD', boxShadow: '0px 1px 2px 0px #1018280D', backgroundColor: '#fff' }}>
            <DataTable
              data={images}
              sx={{ height: '100%', borderRadius: '8px', 'table': { minWidth: 'unset' } }}
              columns={columns}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
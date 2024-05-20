import { Box, Button, ButtonGroup, Chip, Grid } from '@mui/material';
import React, { useState } from 'react';
import { DashboardHeader } from '../../../components/dashboard/home/dashboard-header';
import dayjs from 'dayjs';
import { DataTable } from '../../../components/common/data-table';
import { StatsCard } from '../../../components/common/stats-card';
import { getStatsIcon } from '../../../util/utility-functions';
import { outlineBtnStyles } from '../../../util/util-styles';
import { DialogData, TextDialogData } from '../../../types/form-dialog';
import FormDialogHandler from '../../../components/common/form-dialog-handler';
import * as yup from 'yup';
import { DriverFormData } from '../../../types/drivers-types';
import { useDriverForm } from '../../../hooks/use-driver-form';
import { useDriverOperations } from '../../../hooks/use-driver-operations';
import { useVehicleForm } from '../../../hooks/use-vehicle-form';
import { DeleteIcon } from '../../../icons/delete-icon';
import { EditIcon } from '../../../icons/edit-icon';
import { ColumnConfig } from '../../../types/data-table';
import TextDialogHandler from '../../../components/common/text-dialog-handler';
import { MainNav } from '../../../components/dashboard/layout/main-nav';

const btnGroupStyles = (isActive: boolean) => {
  return {
    ...outlineBtnStyles,
    bgcolor: isActive ? 'var(--mui-palette-primary-main)' : '#fff',
    color: isActive ? 'var(--mui-palette-primary-contrastText)' : '#344054',
    '&:hover': {
      bgcolor: isActive ? 'var(--mui-palette-primary-main)' : '#fff',
      color: isActive ? 'var(--mui-palette-primary-contrastText)' : '#344054'
    }
  }
}

interface Driver {
  firstName: string,
  lastName: string,
  userId: number,
  pin: number;
  vehicle: string,
  status: 'online' | 'offline' | 'disable';
  lastLogin: Date,
}

interface Vehicle {
  id: number
  registration: string,
  make: string,
  model: number,
  lastDriver: number,
  lastLocation: string,
  status: 'online' | 'offline' | 'disable',
  lastLogin: Date,
}


export const DriverVehiclesPage = () => {
  const [activeTab, setActiveTab] = useState('drivers');
  const [dialog, setDialog] = useState({} as DialogData);
  const [textDialog, setTextDialog] = useState({} as TextDialogData);
  const driverFields = useDriverForm();
  const vehicleFields = useVehicleForm();
  const { handleAddDriver } = useDriverOperations();

  const statusMap = {
    online: { label: 'Online', color: 'warning' },
    offline: { label: 'Offline', color: 'success' },
    disable: { label: 'Disable', color: 'error' },
  } as const;

  const driverSchema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().required("Email is required"),
  });

  const vehicleSchema = yup.object().shape({
    registration: yup.string().required("Registration is required"),
    make: yup.string().required("Make is required"),
    model: yup.string().required("Model is required"),
  });

  const onAddDriver = () => {
    setDialog({
      isOpen: true,
      title: 'Add Driver',
      fields: driverFields,
      schema: driverSchema,
      submitBtnText: 'Save',
      handleConfirm: (formData: DriverFormData) => handleAddDriver(formData),
    })
  }

  const onAddVehicle = () => {
    setDialog({
      isOpen: true,
      title: 'Add Vehicle',
      fields: vehicleFields,
      schema: vehicleSchema,
      submitBtnText: 'Save',
      handleConfirm: (formData: DriverFormData) => handleAddDriver(formData),
    })
  }

  const onEditDriver = (id: number) => {
    setDialog({
      isOpen: true,
      title: 'Edit Driver',
      fields: driverFields,
      schema: driverSchema,
      submitBtnText: 'Save',
      handleConfirm: (formData: DriverFormData) => handleAddDriver(formData),
    })
  }

  const onDeleteDriver = (id: number) => {
    setTextDialog({
      isOpen: true,
      title: 'Delete Driver',
      text: 'Are you sure you want to delete this driver?',
      submitBtnText: 'Delete',
      handleConfirm: () => { },
    })
  }

  const onEditVehicle = (id: number) => {
    setDialog({
      isOpen: true,
      title: 'Edit Vehicle',
      fields: vehicleFields,
      schema: vehicleSchema,
      submitBtnText: 'Save',
      handleConfirm: (formData: DriverFormData) => handleAddDriver(formData),
    })
  }

  const onDeleteVehicle = (id: number) => {
    setTextDialog({
      isOpen: true,
      title: 'Delete Vehicle',
      text: 'Are you sure you want to delete this vehicle?',
      submitBtnText: 'Delete',
      handleConfirm: () => { },
    })
  }

  const handleOpenFormDialog = (open: boolean) => {
    setDialog({ ...dialog, isOpen: open });
  }

  const handleOpenTextDialog = (open: boolean) => {
    setTextDialog({ ...textDialog, isOpen: open });
  }

  const driverColumns: ColumnConfig<Driver>[] = [
    {
      label: 'First Name',
      render: (driver) => driver.firstName,
    },
    {
      label: 'Last Name',
      render: (driver) => driver.lastName,
    },
    {
      label: 'User ID',
      render: (driver) => driver.userId,
    },
    {
      label: 'Pin',
      render: (driver) => driver.pin,
    },
    {
      label: 'Vehicle',
      render: (driver) => driver.vehicle,
    },
    {
      label: 'Status',
      render: (driver) => {
        const { label, color } = statusMap[driver.status] ?? { label: 'Unknown', color: 'default' };
        return <Chip color={color} label={label} size="small" />;
      },
    },
    {
      label: 'Last Login',
      render: (driver) => dayjs(driver.lastLogin).format('MMM D, YYYY'),
    },
    {
      label: '',
      render: (driver) => <DeleteIcon onClick={() => onDeleteDriver(driver?.userId)} />,
      width: '10px',
    },
    {
      label: '',
      render: (driver) => <EditIcon onClick={() => onEditDriver(driver?.userId)} />,
      width: '10px',
    },
  ];

  const vehicleColumns: ColumnConfig<Vehicle>[] = [
    {
      label: 'Registration',
      render: (vehicle) => vehicle.registration,
    },
    {
      label: 'Make',
      render: (vehicle) => vehicle.make,
    },
    {
      label: 'Model',
      render: (vehicle) => vehicle.model,
    },
    {
      label: 'Last Driver',
      render: (vehicle) => vehicle.lastDriver,
    },
    {
      label: 'Last Location',
      render: (vehicle) => vehicle.lastLocation,
    },
    {
      label: 'Status',
      render: (vehicle) => {
        const { label, color } = statusMap[vehicle.status] ?? { label: 'Unknown', color: 'default' };
        return <Chip color={color} label={label} size="small" />;
      },
    },
    {
      label: 'Last Login',
      render: (vehicle) => dayjs(vehicle.lastLogin).format('MMM D, YYYY'),
    },
    {
      label: '',
      render: (vehicle) => <DeleteIcon onClick={() => onDeleteVehicle(vehicle?.id)} />,
      width: '10px',
    },
    {
      label: '',
      render: (vehicle) => <EditIcon onClick={() => onEditVehicle(vehicle?.id)} />,
      width: '10px',
    },
  ];

  const drivers: Driver[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      userId: 1,
      pin: 1234,
      vehicle: 'Toyota Corolla',
      status: 'online',
      lastLogin: new Date('2024-05-17T08:00:00Z')
    },
    {
      firstName: 'Alice',
      lastName: 'Smith',
      userId: 2,
      pin: 5678,
      vehicle: 'Honda Civic',
      status: 'offline',
      lastLogin: new Date('2024-05-16T10:30:00Z')
    },
    {
      firstName: 'Bob',
      lastName: 'Johnson',
      userId: 3,
      pin: 2468,
      vehicle: 'Ford F-150',
      status: 'disable',
      lastLogin: new Date('2024-05-15T12:45:00Z')
    }
  ];

  const vehicles: Vehicle[] = [
    {
      id: 1,
      registration: 'ABC123',
      make: 'Toyota',
      model: 1234,
      lastDriver: 1,
      lastLocation: 'New York',
      status: 'online',
      lastLogin: new Date('2024-05-17T08:00:00Z')
    },
    {
      id: 2,
      registration: 'XYZ789',
      make: 'Honda',
      model: 1234,
      lastDriver: 2,
      lastLocation: 'Los Angeles',
      status: 'offline',
      lastLogin: new Date('2024-05-16T10:30:00Z')
    },
    {
      id: 3,
      registration: 'DEF456',
      make: 'Ford',
      model: 1234,
      lastDriver: 3,
      lastLocation: 'Chicago',
      status: 'disable',
      lastLogin: new Date('2024-05-15T12:45:00Z')
    }
  ];

  const stats = [
    {
      title: 'Total Drivers',
      value: 10,
    },
    {
      title: 'Online Drivers',
      value: 4,
    },
    {
      title: 'Total Vehicles',
      value: 5,
    },
    {
      title: 'Online Vehicles',
      value: 2,
    }
  ]

  return (
    <Box>
      <MainNav>
        <DashboardHeader />
      </MainNav>
      <Grid container spacing={3} sx={{ marginTop: '10px' }}>
        {stats?.map((stat) =>
          <Grid item lg={3} sm={6} xs={12}>
            <StatsCard sx={{ height: '100%' }} value={stat.value} text={stat?.title} icon={getStatsIcon(stat?.title)} />
          </Grid>)}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '25px' }}>
        <ButtonGroup variant="outlined" aria-label="Basic button group">
          <Button
            onClick={() => setActiveTab("drivers")}
            sx={btnGroupStyles(activeTab === 'drivers')}
          >
            Drivers
          </Button>
          <Button
            onClick={() => setActiveTab("vehicles")}
            sx={btnGroupStyles(activeTab === 'vehicles')}
          >
            Vehicles
          </Button>
        </ButtonGroup>
        <ButtonGroup variant="outlined" aria-label="Basic button group">
          <Button sx={outlineBtnStyles} onClick={onAddDriver}>Add Driver</Button>
          <Button sx={outlineBtnStyles} onClick={onAddVehicle}>Add Vehicle</Button>
        </ButtonGroup>
      </Box>
      {activeTab === 'drivers' ?
        <DataTable
          data={drivers}
          sx={{ height: '100%', borderRadius: '8px', marginTop: '32px' }}
          columns={driverColumns}
        /> :
        <DataTable
          data={vehicles}
          sx={{ height: '100%', borderRadius: '8px', marginTop: '32px' }}
          columns={vehicleColumns}
        />}
      <FormDialogHandler dialogData={dialog} setOpenFormDialog={handleOpenFormDialog} />
      <TextDialogHandler dialogData={textDialog} setOpenFormDialog={handleOpenTextDialog} />
    </Box>
  );
};
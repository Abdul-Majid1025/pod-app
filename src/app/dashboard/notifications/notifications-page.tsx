import { Box, Typography } from '@mui/material';
import React from 'react';
import { MainNav } from '../../../components/dashboard/layout/main-nav';
import { FormPage } from '../../../components/common/form-page';
import { NotificationFormData } from '../../../types/notifications';
import * as yup from 'yup';
import { useNotificationsForm } from '../../../hooks/use-notification-form';

export const NotificationsPage = () => {
  const fields = useNotificationsForm();
  const schema = yup.object().shape({
    // subject: yup.string().required("Name is required"),
    // description: yup.string().required("API key is required"),
  });

  const handleAddIntegration = (formData: NotificationFormData) => {
    console.log(formData);
  }

  return (
    <Box>
      <MainNav>
        <Typography sx={{ fontWeight: '500', fontSize: '30px' }}>Notifications</Typography>
      </MainNav>
      <FormPage
        sx={{ marginTop: '20px' }}
        schema={schema}
        submitButtonText='Send'
        fields={fields}
        submitData={(formData: NotificationFormData) => handleAddIntegration(formData)}
      />
    </Box>
  );
};
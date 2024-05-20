import { Box, Typography } from '@mui/material';
import React from 'react';
import { MainNav } from '../../../components/dashboard/layout/main-nav';
import { FormPage } from '../../../components/common/form-page';
import * as yup from 'yup';
import { IntegrationFormData } from '../../../types/integrations';
import { useIntegrationsForm } from '../../../hooks/use-integrations-form';



export const IntegrationsPage = () => {
  const fields = useIntegrationsForm();
  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    key: yup.string().required("API key is required"),
  });

  const handleAddIntegration = (formData: IntegrationFormData) => {
    console.log(formData);
  }

  return (
    <Box>
      <MainNav>
        <Typography sx={{ fontWeight: '500', fontSize: '30px' }}>Integrations</Typography>
      </MainNav>
      <FormPage
        sx={{ marginTop: '20px' }}
        schema={schema}
        submitButtonText='Create API Key'
        fields={fields}
        submitData={(formData: IntegrationFormData) => handleAddIntegration(formData)}
      />
    </Box>
  );
};
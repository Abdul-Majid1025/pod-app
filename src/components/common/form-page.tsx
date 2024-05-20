import * as React from 'react';
import { Box, Button, SxProps, Typography } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { FormField } from '../../types/form-dialog';

const errorMsgStyles = {
  margin: '5px 0px',
  fontSize: '12px',
  lineHeight: '15px',
  color: '#f44336',
  minHeight: '15px',
  display: 'block'
}

type Props = {
  sx?: SxProps;
  submitData: (data: any) => void;
  fields: FormField[];
  schema: yup.ObjectSchema<any>;
  submitButtonText: string;
}

export function FormPage({ sx, fields, schema, submitButtonText, submitData }: Props): React.JSX.Element {

  const { handleSubmit, control, formState: { errors }, reset } = useForm<any>({
    resolver: yupResolver(schema),
  });

  React.useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);

  return (
    <Box sx={{ ...sx, width: '100%', backgroundColor: '#fff', border: '1px solid #EAECF0', borderRadius: '8px', padding: '20px 24px' }}>
      <form onSubmit={handleSubmit(submitData)} style={{ width: '420px' }}>
        {fields.map((item) => (
          <React.Fragment key={item.name}>
            <Typography sx={{ fontWeight: '500' }}>{item.label}</Typography>
            <Controller
              name={item.name}
              control={control}
              defaultValue={item.defaultValue}
              render={({ field }) => (item.render({ ...field }))}
            />
            <Typography sx={errorMsgStyles}>{errors[item.name]?.message as React.ReactNode}</Typography>
          </React.Fragment>
        ))}
        <Button variant='contained' fullWidth type='submit'>{submitButtonText}</Button>
      </form>
    </Box>
  );
}

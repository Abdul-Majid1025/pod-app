import React, { ReactNode, useCallback, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, Box, Typography, Paper, PaperProps, TypographyProps } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormField } from '../../types/form-dialog';
import { CrossIcon } from '../../icons/cross-icon';

const submitButtonStyles = {
  display: 'flex',
  justifyContent: 'center',
  height: '60px'
}

type Props = PaperProps & {
  open: boolean;
  title: string;
  onClose: () => void;
  submitData: (data: any) => void;
  fields: FormField[];
  schema: yup.ObjectSchema<any>;
  submitButton: JSX.Element;
  fieldLabelProps: TypographyProps;
  errorTextProps: TypographyProps;
}

const FormDialog = React.memo((props: Props) => {
  const { open, title, onClose, submitData, fields, submitButton, schema, fieldLabelProps, errorTextProps, sx, ...rest } = props;

  const { handleSubmit, control, formState: { errors }, reset } = useForm<any>({
    resolver: yupResolver(schema),
  });

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    return () => {
      reset();
    };
  }, [open, reset]);

  return (
    <Dialog open={open} onClose={handleClose} PaperComponent={(innerProps) => <Paper {...innerProps} sx={sx} {...rest} />}>
      <form onSubmit={handleSubmit(submitData)}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <DialogTitle>
            {title}
          </DialogTitle>
          <CrossIcon onClick={handleClose} sx={{ marginRight: '24px', cursor: 'pointer' }} />
        </Box>
        <DialogContent>
          {fields.map((item) => (
            <React.Fragment key={item.name}>
              <Typography {...fieldLabelProps}>{item.label}</Typography>
              <Controller
                name={item.name}
                control={control}
                defaultValue={item.defaultValue}
                render={({ field }) => (item.render({ ...field }))}
              />
              <Typography {...errorTextProps}>{errors[item.name]?.message as ReactNode}</Typography>
            </React.Fragment>
          ))}
        </DialogContent>
        <Box sx={submitButtonStyles}>{submitButton}</Box>
      </form>
    </Dialog>
  );
});

export default FormDialog;

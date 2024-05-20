import React from 'react';
import { Button } from '@mui/material';
import FormDialog from './form-dialog';
import { DialogData } from '../../types/form-dialog';

const modalDialogStyle = {
  width: '370px',
  '.MuiDialogTitle-root': {
    marginTop: '0',
    display: 'flex',
    alignItems: 'center',
    height: '70px',
    fontSize: '30px',
    fontWeight: '400',
    lineHeight: '38px',
    color: '#101828',
  },
  '.MuiDialogContent-root': {
    padding: '0px 24px'
  }
}

const fieldLabelStyle = {
  marginTop: '0px',
  marginBottom: '6px',
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: '20px',
  color: '#344054',
  display: 'block',
}

const errorMsgStyles = {
  margin: '5px 0px',
  fontSize: '12px',
  lineHeight: '15px',
  color: '#f44336',
  minHeight: '15px',
  display: 'block'
}

const submitBtnStyles = {
  padding: '10px',
  height: '44px',
  width: '86%',
}

type Props = {
  dialogData: DialogData,
  setOpenFormDialog: (a: boolean) => void,
}

const FormDialogHandler = ({ dialogData, setOpenFormDialog }: Props) => {
  const { isOpen, title, submitBtnText, fields, schema, handleConfirm } = dialogData;

  return (
    <FormDialog
      sx={modalDialogStyle}
      open={isOpen}
      title={title}
      onClose={() => setOpenFormDialog(false)}
      submitData={handleConfirm}
      fields={fields || []}
      schema={schema}
      fieldLabelProps={{ sx: fieldLabelStyle }}
      errorTextProps={{ sx: errorMsgStyles }}
      submitButton={<Button type='submit' variant='contained' sx={submitBtnStyles}>{submitBtnText}</Button>}
    />
  );
};

export default FormDialogHandler;

import React from 'react';
import { Button, Typography } from '@mui/material';
import TextDialog from './text-dialog';
import { TextDialogData } from '../../types/form-dialog';

const textModalDialogStyle = {
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
    textAlign: 'center'
  },
  '.MuiDialogActions-root': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5px',
    marginBottom: '50px',
    '.MuiButton-greyBtn': {
      marginRight: '10px'
    }
  }
}

const submitBtnStyles = {
  padding: '7px 15px',
}

type Props = {
  dialogData: TextDialogData,
  setOpenFormDialog: (a: boolean) => void,
}

const TextDialogHandler = ({ dialogData, setOpenFormDialog }: Props) => {
  const { isOpen, title, text, submitBtnText, handleConfirm } = dialogData;
  return (
    <TextDialog
      sx={textModalDialogStyle}
      open={isOpen}
      title={title}
      onClose={() => setOpenFormDialog(false)}
      submitButton={<Button onClick={handleConfirm} variant='contained'>{submitBtnText}</Button>}
      cancelButton={<Button onClick={() => setOpenFormDialog(false)} sx={submitBtnStyles} variant='outlined'>Cancel</Button>}
    >
      <Typography>{text}</Typography>
    </TextDialog>
  );
};

export default TextDialogHandler;

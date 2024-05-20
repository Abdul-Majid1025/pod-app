import React, { ReactNode, useCallback } from 'react';
import { Dialog, DialogTitle, DialogContent, Box, Paper, PaperProps, DialogActions } from '@mui/material';
import { CrossIcon } from '../../icons/cross-icon';

// const submitButtonStyles = {
//   display: 'flex',
//   justifyContent: 'center',
//   height: '60px'
// }

type Props = PaperProps & {
  open: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
  submitButton: JSX.Element;
  cancelButton: JSX.Element;
}

const TextDialog = React.memo((props: Props) => {
  const { open, title, onClose, children, cancelButton, submitButton, sx, ...rest } = props;

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <Dialog open={open} onClose={handleClose} PaperComponent={(innerProps) => <Paper {...innerProps} sx={sx} {...rest} />}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <DialogTitle>
          {title}
        </DialogTitle>
        <CrossIcon onClick={handleClose} sx={{ marginRight: '24px', cursor: 'pointer' }} />
      </Box>
      <DialogContent>
        {children}
      </DialogContent>
      <DialogActions>
        {cancelButton}
        {submitButton}
      </DialogActions>
    </Dialog>
  );
});

export default TextDialog;

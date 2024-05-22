import { Box, BoxProps, Typography } from '@mui/material';

const inputFieldStyles = {
  height: '44px',
  borderRadius: '8px',
  border: '1px solid #D0D5DD',
  padding: '10px 14px',
  marginTop: '6px',
  marginBottom: '16px',
}

interface Props extends BoxProps {
  label: string;
  placeholder: string;
  type: string;
}

export const InputField = (props: Props) => {
  const { label, placeholder, type, sx, ...rest } = props;
  return (
    <>
      <Typography sx={{ fontWeight: '500' }}>{label}</Typography>
      <Box {...rest} component='input' placeholder={placeholder} sx={{ ...sx, ...inputFieldStyles }} type={type} />
    </>
  );
};
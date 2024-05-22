import { Button, Link, Typography } from '@mui/material';
import { AuthContainer } from './auth-container';
import { MailIcon } from '../../icons/mail-icon';
import { useNavigate } from 'react-router-dom';

export const CheckEmail = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/signin');
  };
  return (
    <AuthContainer
      icon={<MailIcon />}
      title="Check Your Email"
      description="We sent a password reset link to abdul.rahim@acklib.com"
    >
      <Button variant="contained" sx={{ marginBottom: '24px' }} onClick={handleButtonClick}>
        Back to login
      </Button>
      <Typography color="text.secondary" variant="body2" sx={{ textAlign: 'center' }}>
        Don&apos;t receive the email?{' '}
        <Link component='a' href='/forgetpassword' underline="hover" variant="subtitle2">
          Click to resend
        </Link>
      </Typography>
    </AuthContainer>
  );
};
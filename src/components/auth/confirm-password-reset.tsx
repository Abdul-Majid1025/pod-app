import { Button } from '@mui/material';
import { AuthContainer } from './auth-container';
import { useNavigate } from 'react-router-dom';
import { CircledPlusIcon } from '../../icons/circled-plus-icon';

export const ConfirmPasswordReset = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/signin');
  };
  return (
    <AuthContainer
      icon={<CircledPlusIcon />}
      title="Password reset"
      description="Your password has been successfully reset. Click below to login."
    >
      <Button variant="contained" sx={{ marginBottom: '24px' }} onClick={handleButtonClick}>
        Back to login
      </Button>
    </AuthContainer>
  );
};
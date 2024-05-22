import * as React from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { AuthContainer } from './auth-container';
import { InputField } from './input-field';
import { AuthLogo } from '../../icons/auth-logo';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  email: yup.string().min(1, { message: 'Email is required' }).email(),
  password: yup.string().min(1, { message: 'Password is required' }),
});

type Values = {
  email: string;
  password: string;
};

export function SignInForm(): React.JSX.Element {
  const navigate = useNavigate();
  const { handleSubmit, control, formState: { errors } } = useForm<any>({
    resolver: yupResolver(schema),
  });

  const onSubmit = React.useCallback(
    async (values: Values): Promise<void> => {
      navigate('/dashboard');
    },
    [navigate]
  );

  return (
    <AuthContainer
      icon={<AuthLogo />}
      title="Welcome back"
      description='Welcome back! Please enter your details.'
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <FormControl error={Boolean(errors.email)}>
                <InputField {...field} label="Email*" placeholder='Enter your email' type="email" />
                {errors.email ? <FormHelperText>abc</FormHelperText> : null}
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <FormControl error={Boolean(errors.password)}>
                <InputField {...field} label="Password*" placeholder='Enter your password' type="password" />
              </FormControl>
            )}
          />
          <div>
            <Link component='a' href='forgetpassword' variant="subtitle2" sx={{ float: 'inline-end' }}>
              Forgot password?
            </Link>
          </div>
          {errors.root ? <Alert color="error">{errors.root.message}</Alert> : null}
          <Button type="submit" variant="contained" sx={{ marginBottom: '24px' }}>
            Login
          </Button>
        </Stack>
      </form>
      <Typography color="text.secondary" variant="body2" sx={{ textAlign: 'center' }}>
        Don&apos;t have an account?{' '}
        <Link component='a' href='/signup' underline="hover" variant="subtitle2">
          Sign up
        </Link>
      </Typography>
    </AuthContainer>
  );
}

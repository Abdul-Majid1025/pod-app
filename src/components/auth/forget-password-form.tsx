import { KeyIcon } from '../../icons/key-icon';
import { AuthContainer } from './auth-container';
import { InputField } from './input-field';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormControl from '@mui/material/FormControl';
import { Controller, useForm } from 'react-hook-form';
import { Button, FormHelperText, Link, Stack, Typography } from '@mui/material';

const schema = yup.object().shape({
  email: yup.string().min(1, { message: 'Email is required' }).email(),
});

type Props = {
  onSubmitClick: () => void
}

export const ForgetPasswordForm = ({ onSubmitClick }: Props) => {
  const { handleSubmit, control, formState: { errors } } = useForm<any>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    onSubmitClick();
    console.log(data);
  };

  return (
    <AuthContainer
      icon={<KeyIcon />}
      title="Forgot Password"
      description='Enter the email associated with your account and we’ll send you a link to reset your password'
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
          <Button type="submit" variant="contained" sx={{ marginBottom: '24px' }}>
            Send Link
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
};
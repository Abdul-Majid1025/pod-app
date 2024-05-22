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

export const ResetPasswordForm = ({ onSubmitClick }: Props) => {
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
      title="Set new password"
      description='Your new password must be different to previously used passwords.'
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <FormControl error={Boolean(errors.email)}>
                <InputField {...field} label="Password*" placeholder='Enter new password' type="password" />
                {errors.email ? <FormHelperText>abc</FormHelperText> : null}
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="confirmPassword"
            render={({ field }) => (
              <FormControl error={Boolean(errors.email)}>
                <InputField {...field} label="Confirm Password*" placeholder='Repeat password' type="password" />
                {errors.email ? <FormHelperText>abc</FormHelperText> : null}
              </FormControl>
            )}
          />
          <Button type="submit" variant="contained" sx={{ marginBottom: '24px' }}>
            Reset Password
          </Button>
        </Stack>
      </form>
      <Typography color="text.secondary" variant="body2" sx={{ textAlign: 'center' }}>
        <Link component='a' href='/signin' underline="hover" variant="subtitle2">
          Back to login
        </Link>
      </Typography>
    </AuthContainer>
  );
};
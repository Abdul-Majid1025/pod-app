import * as React from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
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

const schema = yup.object().shape({
  firstName: yup.string().min(1, { message: 'First name is required' }),
  lastName: yup.string().min(1, { message: 'Last name is required' }),
  email: yup.string().min(1, { message: 'Email is required' }).email(),
  password: yup.string().min(6, { message: 'Password should be at least 6 characters' }),
});

type Values = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}


export function SignUpForm(): React.JSX.Element {

  const { handleSubmit, control, formState: { errors } } = useForm<any>({
    resolver: yupResolver(schema),
  });


  const onSubmit = React.useCallback(
    async (values: Values): Promise<void> => {
    },
    []
  );

  return (
    <AuthContainer
      icon={<AuthLogo />}
      title="Sign up"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          <Controller
            control={control}
            name="firstName"
            render={({ field }) => (
              <FormControl error={Boolean(errors.firstName)}>
                <InputField {...field} label="Name*" placeholder='Enter your name' type="text" />
                {errors.firstName ? <FormHelperText>abc</FormHelperText> : null}
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="lastName"
            render={({ field }) => (
              <FormControl error={Boolean(errors.firstName)}>
                <InputField {...field} label="Email*" placeholder='Enter your email' type="email" />
                {errors.firstName ? <FormHelperText>abc</FormHelperText> : null}
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <FormControl error={Boolean(errors.email)}>
                <InputField {...field} label="Password*" placeholder='Enter your password' type="password" />
                {errors.email ? <FormHelperText>def</FormHelperText> : null}
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <FormControl error={Boolean(errors.password)}>
                <InputField {...field} label="Confirm Password*" placeholder='Enter your password' type="password" />
                {errors.password ? <FormHelperText>hij</FormHelperText> : null}
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="terms"
            render={({ field }) => (
              <div>
                <FormControlLabel
                  control={<Checkbox {...field} />}
                  label={
                    <Typography sx={{ fontSize: '14px' }}>
                      By creating an account you're agreeing to
                      our <Link>Terms of Service</Link> and <Link>Privacy Policy</Link>
                    </Typography>
                  }
                />
                {errors.terms ? <FormHelperText error>lmn</FormHelperText> : null}
              </div>
            )}
          />
          {errors.root ? <Alert color="error">{errors.root.message}</Alert> : null}
          <Button type="submit" variant="contained" sx={{ marginTop: '24px', marginBottom: '24px' }}>
            Sign up
          </Button>
        </Stack>
      </form>
      <Typography color="text.secondary" variant="body2" sx={{ textAlign: 'center' }}>
        Already have an account?{' '}
        <Link component='a' href='/signin' underline="hover" variant="subtitle2">
          Sign in
        </Link>
      </Typography>
    </AuthContainer>
  );
}

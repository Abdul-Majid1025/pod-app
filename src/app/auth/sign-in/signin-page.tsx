import * as React from 'react';
import { SignInForm } from '../../../components/auth/sign-in-form';
import { Layout } from '../../../components/auth/layout';

export default function SignInPage(): React.JSX.Element {
  return (
    <Layout>
      <SignInForm />
    </Layout>
  );
}

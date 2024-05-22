import * as React from 'react';
import { Layout } from '../../../components/auth/layout';
import { ForgetPasswordForm } from '../../../components/auth/forget-password-form';
import { CheckEmail } from '../../../components/auth/check-email';

export default function ForgetPasswordPage(): React.JSX.Element {
  const [showForm, setShowForm] = React.useState(true);

  const onSubmit = React.useCallback(() => {
    setShowForm(false);
  }, [setShowForm]);

  return (
    <Layout>
      {showForm ?
        <ForgetPasswordForm onSubmitClick={onSubmit} />
        : <CheckEmail />}
    </Layout>
  );
}

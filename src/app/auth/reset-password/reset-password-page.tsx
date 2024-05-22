import * as React from 'react';
import { Layout } from '../../../components/auth/layout';
import { ResetPasswordForm } from '../../../components/auth/reset-password-form';
import { ConfirmPasswordReset } from '../../../components/auth/confirm-password-reset';

export default function ResetPasswordPage(): React.JSX.Element {
  const [showForm, setShowForm] = React.useState(true);

  const onSubmit = React.useCallback(() => {
    setShowForm(false);
  }, [setShowForm]);

  return (
    <Layout>
      {showForm ?
        <ResetPasswordForm onSubmitClick={onSubmit} />
        : <ConfirmPasswordReset />}
    </Layout>
  );
}

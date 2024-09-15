import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route, Routes,
  Navigate
} from 'react-router-dom';
import Layout from './app/dashboard/layout';
import { ThemeProvider } from './components/core/theme-provider/theme-provider';
import { DashboardPage } from './app/dashboard/home/dashboard-page';
import { OrdersPage } from './app/dashboard/orders/orders-page';
import { DriverVehiclesPage } from './app/dashboard/drivers/drivers-vehicles-page';
import { OrderDetailPage } from './app/dashboard/orders/order-detail-page';
import { NotificationsPage } from './app/dashboard/notifications/notifications-page';
import { IntegrationsPage } from './app/dashboard/integrations/integrations-page';
import { Box } from '@mui/material';
import { ChatPage } from './app/dashboard/chat/chat-page';
import SignUpPage from './app/auth/sign-up/signup-page';
import SignInPage from './app/auth/sign-in/signin-page';
import ResetPasswordPage from './app/auth/reset-password/reset-password-page';
import ForgetPasswordPage from './app/auth/forget-password/forget-password-page';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router>
          {/* <Layout> */}
          <Routes>
            <Route path="/" element={<Navigate to="/signin" replace />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/resetpassword" element={<ResetPasswordPage />} />
            <Route path="/forgetpassword" element={<ForgetPasswordPage />} />
            <Route path="/dashboard" element={<Layout><DashboardPage /></Layout>} />
            <Route path="/orders" element={<Layout><OrdersPage /></Layout>} />
            <Route path="/drivers" element={<Layout><DriverVehiclesPage /></Layout>} />
            <Route path="/integrations" element={<Layout><IntegrationsPage /></Layout>} />
            <Route path="/reports" element={<Layout><Box /></Layout>} />
            <Route path="/users" element={<Layout><Box /></Layout>} />
            <Route path="/download" element={<Layout><Box /></Layout>} />
            <Route path="/notifications" element={<Layout><NotificationsPage /></Layout>} />
            <Route path="/chat" element={<Layout><ChatPage /></Layout>} />
            <Route path="/order" element={<Layout><OrderDetailPage /></Layout>} />
          </Routes>
          {/* </Layout> */}
        </Router>
      </ThemeProvider >
    </Provider>
  );
}

export default App;

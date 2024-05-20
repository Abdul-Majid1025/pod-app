import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route, Routes
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

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/drivers" element={<DriverVehiclesPage />} />
            <Route path="/integrations" element={<IntegrationsPage />} />
            <Route path="/reports" element={<Box />} />
            <Route path="/users" element={<Box />} />
            <Route path="/download" element={<Box />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/order" element={<OrderDetailPage />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider >
  );
}

export default App;

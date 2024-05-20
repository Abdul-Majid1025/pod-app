import { ChatIcon } from "../../../icons/chat-icon";
import { DashboardIcon } from "../../../icons/dashboard-icon";
import { DownloadIcon } from "../../../icons/download-icon";
import { IntegrationsIcon } from "../../../icons/integrations-icon";
import { NotificationIcon } from "../../../icons/notification-icon";
import { OrdersIcon } from "../../../icons/orders-icon";
import { ReportIcon } from "../../../icons/reports-icon";
import { UsersIcon } from "../../../icons/users-icon";
import { VehicleIcon } from "../../../icons/vehicle-icon";
import { NavItemConfig } from "../../../types/nav";

export const navItems = [
  { key: 'dashboard', title: 'Dashboard', href: '/dashboard', icon: <DashboardIcon /> },
  { key: 'orders', title: 'Orders', href: '/orders', icon: <OrdersIcon /> },
  { key: 'drivers', title: 'Drivers & Vehicles', href: '/drivers', icon: <VehicleIcon /> },
  { key: 'integrations', title: 'Integrations', href: '/integrations', icon: <IntegrationsIcon /> },
  { key: 'reports', title: 'Reports', href: '/reports', icon: <ReportIcon /> },
  { key: 'users', title: 'Portal Users', href: '/users', icon: <UsersIcon /> },
  { key: 'download', title: 'Download App', href: '/download', icon: <DownloadIcon /> },
  { key: 'notifications', title: 'Notifications', href: '/notifications', icon: <NotificationIcon /> },
  { key: 'chat', title: 'Chat', href: '/chat', icon: <ChatIcon /> },
] satisfies NavItemConfig[];

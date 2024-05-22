export const getStatsIcon = (type: string) => {
    switch (type) {
      case 'Pending Deliveries':
        return '/pending-icon.png';
      case 'Delivered':
        return '/delivered-icon.png';
      case 'Undelivered':
        return '/not-delivered-icon.png';
      case 'Total Drivers':
      case 'Online Drivers':
      case 'Driver':
        return '/driver-icon.png';
      case 'Date Of Delivery':
        return '/calender-icon.png';
      case 'Signed By':
        return 'signatured-icon.png';
      default:
        return '/vehicle-icon.png';
    }
  }
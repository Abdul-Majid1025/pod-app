import * as React from 'react';
import Box from '@mui/material/Box';
import { Avatar } from '@mui/material';
import { Person } from '../../../types/orders';
import { IconLabelEntry } from '../../common/icon-label-entry';
import { PersonIcon } from '../../../icons/person-icon';
import { MailIcon } from '../../../icons/mail-icon';
import { PhoneIcon } from '../../../icons/phone-icon';
import { LocationIcon } from '../../../icons/location-icon';


type Props = {
  person: Person
}

export function PersonCard({ person }: Props): React.JSX.Element {
  const { name, email, contactNo, address } = person;
  return (
    <Box sx={{
      display: 'flex', flex: '0 0 auto', gap: 2, p: '6px 16px'
    }}>
      <Avatar src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6" />
      <Box>
        <IconLabelEntry sx={{ marginBottom: '8px' }} label={name} icon={<PersonIcon />} />
        <IconLabelEntry sx={{ marginBottom: '8px' }} label={email} icon={<MailIcon />} />
        <IconLabelEntry sx={{ marginBottom: '8px' }} label={contactNo} icon={<PhoneIcon />} />
        <IconLabelEntry sx={{ marginBottom: '8px' }} label={address} icon={<LocationIcon />} />
      </Box>
    </Box>
  );
}



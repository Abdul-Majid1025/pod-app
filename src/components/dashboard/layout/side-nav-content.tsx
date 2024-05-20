import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Logo } from '../../../icons/logo';
import { Avatar, Divider, Typography } from '@mui/material';
import { LogoutIcon } from '../../../icons/logout-icon';
import { NavItemConfig } from '../../../types/nav';
import { navItems } from './config';

export function SideNavContent(): React.JSX.Element {

  return (
    <React.Fragment>
      <Stack spacing={2} sx={{ p: 3 }}>
        <Box component={'a'} href={'/'} sx={{ display: 'inline-flex' }}>
          <Logo />
        </Box>
      </Stack>
      <Divider sx={{ borderColor: 'var(--mui-palette-neutral-700)' }} />
      <Box component="nav" sx={{ flex: '1 1 auto', p: '12px' }}>
        {renderNavItems({ pathname: '/overview', items: navItems })}
      </Box>
      <Divider sx={{ borderColor: 'var(--mui-palette-neutral-700)' }} />
      <Stack spacing={2} sx={{ p: '12px' }}>
        <Box sx={{
          display: 'flex', alignItems: 'center', flex: '0 0 auto', gap: 1, p: '6px 30px', cursor: 'pointer'
        }}>
          <LogoutIcon />
          <Typography variant="body2">Logout</Typography>
        </Box>
        <Box sx={{
          display: 'flex', flex: '0 0 auto', gap: 1, p: '6px 16px'
        }}>
          <Avatar src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6" />
          <Box>
            <Typography variant="body2">David Thomas</Typography>
            <Typography variant="body2">davidthamos@gmail.com</Typography>
          </Box>
        </Box>
      </Stack >
    </React.Fragment>
  );
}

function renderNavItems({ items = [], pathname }: { items?: NavItemConfig[]; pathname: string }): React.JSX.Element {
  const children = items.reduce((acc: React.ReactNode[], curr: NavItemConfig): React.ReactNode[] => {
    const { key, ...item } = curr;

    acc.push(<NavItem key={key} pathname={pathname} {...item} />);

    return acc;
  }, []);

  return (
    <Stack component="ul" spacing={1} sx={{ listStyle: 'none', m: 0, p: 0 }}>
      {children}
    </Stack>
  );
}

interface NavItemProps extends Omit<NavItemConfig, 'items'> {
  pathname: string;
}

function NavItem({ disabled, external, href, icon, matcher, pathname, title }: NavItemProps): React.JSX.Element {
  const active = window.location.pathname?.includes(href || '/dashboard')

  return (
    <li>
      <Box
        {...(href
          ? {
            component: 'a',
            href,
            target: external ? '_blank' : undefined,
            rel: external ? 'noreferrer' : undefined,
          }
          : { role: 'button' })}
        sx={{
          alignItems: 'center',
          borderRadius: 1,
          color: 'var(--NavItem-color)',
          cursor: 'pointer',
          display: 'flex',
          flex: '0 0 auto',
          gap: 1,
          p: '6px 16px',
          position: 'relative',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          ...(disabled && {
            bgcolor: 'var(--NavItem-disabled-background)',
            color: 'var(--NavItem-disabled-color)',
            cursor: 'not-allowed',
          }),
          ...(active && { bgcolor: 'var(--NavItem-active-background)', color: 'var(--NavItem-active-color)' }),
        }}
      >
        <Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center', flex: '0 0 auto' }}>
          {icon}
        </Box>
        <Box sx={{ flex: '1 1 auto' }}>
          <Typography
            component="span"
            sx={{ color: 'inherit', fontSize: '0.875rem', fontWeight: 500, lineHeight: '28px' }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </li>
  );
}
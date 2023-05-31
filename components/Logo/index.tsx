import { Avatar, AvatarProps } from '@mui/material';

export default function Logo({ sx: sxProps }: Pick<AvatarProps, 'sx'>) {
  return (
    <Avatar src="/images/logo.svg" sx={Object.assign({ width: '100%', height: '100%' }, sxProps)} />
  );
}

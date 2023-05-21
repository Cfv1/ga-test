import React, {memo} from 'react';
import {Box, Typography} from '@mui/material';
import {AccountCircle} from '@mui/icons-material';

import {IContact} from 'src/models/IContact';
import {AVATAR, CONTACT, CONTACT_ACTIVE, DEFAULT_AVATAR} from './styles';

interface IContactProps {
  data: IContact;
  isActive: boolean;
}

const Contact = (props: IContactProps) => {
  const {data, isActive} = props;

  return (
    <Box sx={isActive ? CONTACT_ACTIVE : CONTACT}>
      <Box sx={AVATAR}>
        <AccountCircle sx={DEFAULT_AVATAR} />
      </Box>
      <Typography variant="body2">
        {data.name}
      </Typography>
    </Box>
  )
}

export default memo(Contact);
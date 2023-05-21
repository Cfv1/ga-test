import React, {memo} from 'react';
import {Box} from '@mui/material';
import {IContact} from 'src/models/IContact';
import {AccountCircle} from '@mui/icons-material';
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
      {data.name}
    </Box>
  )
}

export default memo(Contact);
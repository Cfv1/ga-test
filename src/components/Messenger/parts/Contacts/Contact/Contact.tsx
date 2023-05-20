import React, {memo} from 'react';
import {Box} from '@mui/material';
import {IContact} from 'src/models/IContact';
import {AccountCircle} from '@mui/icons-material';
import {AVATAR, CONTACT, DEFAULT_AVATAR} from './styles';

interface IContactProps {
  data: IContact;
}

const Contact = (props: IContactProps) => {
  const {data} = props;

  return (
    <Box sx={CONTACT}>
      <Box sx={AVATAR}>
        <AccountCircle sx={DEFAULT_AVATAR} />
      </Box>
      {data.name}
    </Box>
  )
}

export default memo(Contact);
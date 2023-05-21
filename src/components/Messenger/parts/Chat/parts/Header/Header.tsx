import React, {memo} from 'react';
import {Box} from '@mui/material';
import {AccountCircle} from '@mui/icons-material';

import {IContact} from 'src/models/IContact';
import {HEADER} from './styles';
import {AVATAR, DEFAULT_AVATAR} from '../common/styles';

interface IHeaderProps {
  contact: IContact;
}

const Header = (props: IHeaderProps) => {
  const {contact} = props;

  return (
    <Box sx={HEADER}>
      <Box sx={AVATAR}>
        <AccountCircle sx={DEFAULT_AVATAR} />
      </Box>
      {contact?.name}
    </Box>
  )
}

export default memo(Header);
import React, {memo} from 'react';
import {Box} from '@mui/material';
import {AccountCircle} from '@mui/icons-material';
import {HEADER} from './styles';
import {AVATAR, DEFAULT_AVATAR} from '../common/styles';
import {ChatProps} from 'src/components/Messenger/parts/Chat/Chat';

const Header = (props: ChatProps) => {
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
import React, {memo} from 'react';
import {Box, Typography} from '@mui/material';
import {AccountCircle} from '@mui/icons-material';

import {AVATAR, DEFAULT_AVATAR} from '../common/styles';
import {ChatProps} from 'src/components/Messenger/parts/Chat/Chat';
import {HEADER} from './styles';

const Header = (props: ChatProps) => {
  const {contact} = props;

  return (
    <Box sx={HEADER}>
      <Box sx={AVATAR}>
        <AccountCircle sx={DEFAULT_AVATAR} />
      </Box>
      <Box>
        <Typography variant="body2">
          {contact?.name}
        </Typography>

        <Typography variant="body2">
          {contact?.phone}
        </Typography>
      </Box>
    </Box>
  )
}

export default memo(Header);
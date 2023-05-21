import React, {memo} from 'react';
import {Box} from '@mui/material';

import Header from 'src/components/Header/Header';
import {CONTENT} from './styles';

const BaseLayout = (props: React.PropsWithChildren) => {
  const {children} = props;

  return (
    <Box position="relative">
      <Header />
      <Box sx={CONTENT}>
        {children}
      </Box>
    </Box>
  )
}

export default memo(BaseLayout);
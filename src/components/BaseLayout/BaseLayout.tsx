import React, {memo} from 'react';
import Header from 'src/components/Header/Header';
import {Box} from '@mui/material';
import {CONTENT} from 'src/components/BaseLayout/styles';

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
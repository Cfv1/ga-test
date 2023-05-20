import React, {memo} from 'react';
import {AppBar, Container, Toolbar} from '@mui/material';
import {HEADER_ROOT} from 'src/components/Header/styles';

const Header = () => {
  return (
    <AppBar position="static" color="primary" sx={HEADER_ROOT}>
      <Container>
        <Toolbar />
      </Container>
    </AppBar>
  )
}

export default memo(Header);
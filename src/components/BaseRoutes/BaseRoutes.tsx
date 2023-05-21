import React, {memo} from 'react';
import {Route, Routes} from 'react-router-dom';

import Login from 'src/components/Login/Login';
import Home from 'src/components/Home/Home';
import {RedirectToHome} from 'src/components/BaseRoutes/Redirect';

const BaseRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<RedirectToHome />} />
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
    </Routes>
  )
}

export default memo(BaseRoutes);
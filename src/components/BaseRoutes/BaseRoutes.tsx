import React, {memo} from 'react';
import {Route, Routes} from 'react-router-dom';
import {RedirectToHome} from 'src/components/BaseRoutes/Redirect';
import Login from 'src/components/Login/Login';
import PrivateRoute from 'src/components/BaseRoutes/PrivateRoute';
import SpecialRoute from 'src/components/BaseRoutes/SpecialRoute';
import Dashboard from 'src/components/Dashboard/Dashboard';

const BaseRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<RedirectToHome />} />
      <Route path="/" element={(
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      )} />
      <Route path="login" element={(
        <SpecialRoute>
          <Login />
        </SpecialRoute>
      )} />
    </Routes>
  )
}

export default memo(BaseRoutes);
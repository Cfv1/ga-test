import React, {memo} from 'react';
import {useAppSelector} from 'src/store/helpers/hooks/useAppSelector';
import {selectAccount, selectCommunication} from 'src/store/reducers/account/accountSelectors';
import {RedirectToLogin} from 'src/components/BaseRoutes/Redirect';
import Dashboard from 'src/components/Dashboard/Dashboard';

const Home = () => {
  const account = useAppSelector(selectAccount);
  const communication = useAppSelector(selectCommunication);

  if (!account && !communication.isRequesting) {
    return <RedirectToLogin />;
  }

  if (account) {
    return <Dashboard />;
  }

  return null;
}

export default memo(Home);
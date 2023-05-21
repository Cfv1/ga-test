import React, {memo} from 'react';

import {useAppSelector} from 'src/store/helpers/hooks/useAppSelector';
import {selectAccount, selectCommunication} from 'src/store/reducers/account/accountSelectors';
import {RedirectToLogin} from 'src/components/BaseRoutes/Redirect';

interface IPrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute = (props: IPrivateRouteProps) => {
  const {children} = props;

  const account = useAppSelector(selectAccount);
  const communication = useAppSelector(selectCommunication);

  if (!account && !communication.isRequesting) {
    return <RedirectToLogin />;
  }

  if (account) {
    return children;
  }

  return null;
}

export default memo(PrivateRoute);
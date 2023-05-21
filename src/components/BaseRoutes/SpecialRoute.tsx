import React, {memo} from 'react';

import {useAppSelector} from 'src/store/helpers/hooks/useAppSelector';
import {selectAccount, selectCommunication} from 'src/store/reducers/account/accountSelectors';
import {RedirectToHome} from 'src/components/BaseRoutes/Redirect';

interface IPrivateRouteProps {
  children: JSX.Element;
}

const SpecialRoute = (props: IPrivateRouteProps) => {
  const {children} = props;

  const account = useAppSelector(selectAccount);
  const communication = useAppSelector(selectCommunication);

  if (!account && !communication.isRequesting) {
    return children;
  }

  if (account) {
    return <RedirectToHome />;
  }

  return null;
}

export default memo(SpecialRoute);